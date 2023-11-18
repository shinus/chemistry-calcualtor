const { minify } = require("terser");
const { readdir, readFile, writeFile } = require("fs").promises;
const { fileURLToPath } = require("url");
const path = require("path");
let cleanCss = require("clean-css");
const fs = require("fs");
let fileToProcess = [];
let htmlFiles = [];
let cheerio = require("cheerio");
let siteDirectory = "_site";
var CleanCSS = require("clean-css");
const { timeStamp } = require("console");

async function findHtmlFiles(directory) {
  const files = await readdir(directory);

  const htmlFiles = [];
  const subdirectories = [];

  for (const file of files) {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      subdirectories.push(file);
    } else if (path.extname(file) === ".html") {
      htmlFiles.push(filePath);
    }
  }

  const htmlFilesInSubdirectories = await Promise.all(
    subdirectories.map((subdirectory) =>
      findHtmlFiles(path.join(directory, subdirectory))
    )
  );

  return htmlFiles.concat(...htmlFilesInSubdirectories);
}

async function compress() {
  // Read all HTML files from the _site directory
  console.time("Time taken for compression");
  console.log("******* Started compressing js and css **********");
  // const files = await readdir("_site");
  htmlFiles = await findHtmlFiles("_site");
  for (const htmlFile of htmlFiles) {
    // const htmlFilePath = path.join(siteDirectory, htmlFile);
    // Read the HTML content
    const htmlContent = fs.readFileSync(htmlFile, "utf8");
    let jsFiles = extractJsFiles(htmlContent);
    let cssFiles = extractCssFiles(htmlContent);
    let codeToMinifyJs = "";
    let codeToMinifyCss = "";
    let obj = {
      jsInputFiles: jsFiles,
      cssInputFiles: cssFiles,
    };

    if (jsFiles.length == 0 && cssFiles.length == 0) {
      continue;
    }
    if (jsFiles.length != 0) {
      codeToMinifyJs = await concatFiles(jsFiles);
    }

    if (cssFiles.length != 0) {
      codeToMinifyCss = await concatCssFiles(cssFiles);
    }

    const minifyOptions = {
      mangle: {
        // reserved: ["myClick"],
        // toplevel: true, // Enable function name mangling
      },
    };

    try {
      let jsOutputPath = "_site/assets/js/" + getCurrentTimestamp() + ".js";
      let cssOutputPath = "_site/assets/css/" + getCurrentTimestamp() + ".css";

      if (jsFiles.length != 0) {
        const jsResult = await minify(codeToMinifyJs, minifyOptions);
        fs.writeFileSync(jsOutputPath, jsResult.code);
      }

      if (cssFiles.length != 0) {
        const cssResult = await minifyCSS(codeToMinifyCss);
        fs.writeFileSync(cssOutputPath, cssResult);
      }

      let modifiedHtml = await appendJsAndCssFiles(
        htmlContent,
        jsOutputPath,
        cssOutputPath,
        jsFiles,
        cssFiles
      );
      var htmlPath = "_site/" + path.relative("_site", htmlFile);
      fs.writeFileSync(htmlPath, modifiedHtml, "utf-8");
    } catch (error) {
      console.log("Error while minifying code -- " + error);
    }
  }

  console.log("**** finished processing ****");
  console.timeEnd("Time taken for compression");
}

function extractJsFiles(htmlContent) {
  const $ = cheerio.load(htmlContent);

  const jsFiles = [];

  $("body script[src]").each((index, element) => {
    const src = $(element).attr("src");
    if (!isCdnLink(src)) {
      jsFiles.push(src);
    }
  });

  return jsFiles;
}
function extractCssFiles(htmlContent) {
  const $ = cheerio.load(htmlContent);

  const cssFiles = [];

  $("link[rel='stylesheet'][href]").each((index, element) => {
    const href = $(element).attr("href");

    // Check if the href is not a CDN link
    if (!isCdnLink(href)) {
      cssFiles.push(href);
    }
  });

  return cssFiles;
}

function isCdnLink(path) {
  return path.startsWith("https://");
}

async function minifyCSS(cssCode) {
  const minified = new CleanCSS().minify(cssCode);
  if (minified.errors.length > 0) {
    throw new Error("CSS minification error: " + minified.errors.join("\n"));
  }
  return minified.styles;
}

function getCurrentTimestamp() {
  return Date.now();
}

async function appendJsAndCssFiles(
  htmlContent,
  minifiedJsPath,
  minifiedCssPath,
  jsFiles,
  cssFiles
) {
  const $ = cheerio.load(htmlContent);
  const scriptDatasets = {};
  function copyDatasetAttributesToObj(oldScript) {
    const dataset = oldScript.data();
    if (Object.keys(dataset).length > 0) {
      const scriptSrc = oldScript.attr("src");
      scriptDatasets[minifiedJsPath] = dataset;
    }
  }
  let tempPath = "/js/calendardateinput.js";
  // Remove original script tags based on paths
  jsFiles.forEach((jsFile) => {
    const scriptSelector = `body script[src='${jsFile}']`;
    const oldScript = $(scriptSelector);

    if (oldScript.length > 0) {
      copyDatasetAttributesToObj(oldScript);

      if (tempPath != jsFile) {
        oldScript.remove();
      } // Remove the old script tag
    }
  });

  // Remove original link tags for stylesheets based on paths
  cssFiles.forEach((cssFile) => {
    const linkSelector = `head link[rel='stylesheet'][href='${cssFile}']`;
    $(linkSelector).remove();
  });

  if (minifiedJsPath != null) {
    // Append minified JS script tag to the body
    const newScript = $("<script>");
    const dataset = scriptDatasets[minifiedJsPath];
    if (dataset) {
      // Set data attributes if present
      for (const key in dataset) {
        newScript.attr(`data-${key}`, dataset[key]);
      }
    }
    newScript.attr("defer", true);

    newScript.attr("src", path.relative("_site", minifiedJsPath));
    $("body").append(newScript);
  }

  if (minifiedCssPath != null) {
    // Append minified CSS link to the head
    $("head").append(
      `<link rel="stylesheet" href="${path.relative(
        "_site",
        minifiedCssPath
      )}">`
    );
  }
  return $.html();
}

async function concatFiles(inputFiles) {
  let code = {};
  for (const file of inputFiles) {
    try {
      let content = await readFileAsync(siteDirectory + "/" + file);
      code[file] = content;
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }
  return code; // Return the concatenated code
}

async function concatCssFiles(inputFiles) {
  let code = "";
  for (const file of inputFiles) {
    try {
      let content = await readFileAsync(siteDirectory + "/" + file);
      code += content;
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }
  return code; // Return the concatenated code
}

async function readFileAsync(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

module.exports = compress;
