const fs = require("fs");
const axios = require("axios");
const compress = require("./compress");
const data = fs.readFileSync("./_data/rating/rating.json", {
  encoding: "utf8",
  flag: "r",
});
const parseData = JSON.parse(data);
const ratingJson = [];

const generateFile = (data) => {
  // Map tools to an array of promises
  const promises = data.tools.map((item) => {
    return axios
      .get(
        `https://ratingapi-main.netlify.app/.netlify/functions/api/v1/${item.name}/rating`
      )
      .then((response) => {
        const newItem = {
          name: response.data.feature,
          rating: response.data.rating,
          votes: response.data.votes,
        };
        ratingJson.push(newItem);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  // Wait for all promises to resolve
  return Promise.all(promises).then(() => {
    // Write the updated ratingJson to the file
    fs.writeFileSync(
      "./_data/rating/rating.json",
      `{"tools":${JSON.stringify(ratingJson)}}`
    );
  });
};

// Call generateFile and then call compress after it completes
generateFile(parseData).then(() => {
  compress();
});
