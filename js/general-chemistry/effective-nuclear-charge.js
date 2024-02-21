const elements = [
    { value: 0, name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008, electronConfiguration: "1s1" },
    { value: 1, name: "Helium", atomicNumber: 2, atomicMass: 4.002602, electronConfiguration: "1s2" },
    { value: 2, name: "Lithium", atomicNumber: 3, atomicMass: 6.94, electronConfiguration: "1s2, 2s1" },
    { value: 3, name: "Beryllium", atomicNumber: 4, atomicMass: 9.0122, electronConfiguration: "1s2, 2s2" },
    { value: 4, name: "Boron", atomicNumber: 5, atomicMass: 10.81, electronConfiguration: "1s2, 2s2, 2p1" },
    { value: 5, name: "Carbon", atomicNumber: 6, atomicMass: 12.011, electronConfiguration: "1s2, 2s2, 2p2" },
    { value: 6, name: "Nitrogen", atomicNumber: 7, atomicMass: 14.007, electronConfiguration: "1s2, 2s2, 2p3" },
    { value: 7, name: "Oxygen", atomicNumber: 8, atomicMass: 15.999, electronConfiguration: "1s2, 2s2, 2p4" },
    { value: 8, name: "Fluorine", atomicNumber: 9, atomicMass: 18.998403163, electronConfiguration: "1s2, 2s2, 2p5" },
    { value: 9, name: "Neon", atomicNumber: 10, atomicMass: 20.1797, electronConfiguration: "1s2, 2s2, 2p6" },
    { value: 10, name: "Sodium", atomicNumber: 11, atomicMass: 22.98976928, electronConfiguration: "1s2, 2s2, 2p6, 3s1" },
    { value: 11, name: "Magnesium", atomicNumber: 12, atomicMass: 24.305, electronConfiguration: "1s2, 2s2, 2p6, 3s2" },
    { value: 12, name: "Aluminum", atomicNumber: 13, atomicMass: 26.9815385, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p1" },
    { value: 13, name: "Silicon", atomicNumber: 14, atomicMass: 28.085, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p2" },
    { value: 14, name: "Phosphorus", atomicNumber: 15, atomicMass: 30.973761998, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p3" },
    { value: 15, name: "Sulfur", atomicNumber: 16, atomicMass: 32.06, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p4" },
    { value: 16, name: "Chlorine", atomicNumber: 17, atomicMass: 35.45, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p5" },
    { value: 17, name: "Argon", atomicNumber: 18, atomicMass: 39.948, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6" },
    { value: 18, name: "Potassium", atomicNumber: 19, atomicMass: 39.0983, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1" },
    { value: 19, name: "Calcium", atomicNumber: 20, atomicMass: 40.078, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2" },
    { value: 20, name: "Scandium", atomicNumber: 21, atomicMass: 44.955908, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d1" },
    { value: 21, name: "Titanium", atomicNumber: 22, atomicMass: 47.867, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d2" },
    { value: 22, name: "Vanadium", atomicNumber: 23, atomicMass: 50.9415, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d3" },
    { value: 23, name: "Chromium", atomicNumber: 24, atomicMass: 51.9961, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1, 3d5" },
    { value: 24, name: "Manganese", atomicNumber: 25, atomicMass: 54.938044, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d5" },
    { value: 25, name: "Iron", atomicNumber: 26, atomicMass: 55.845, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d6" },
    { value: 26, name: "Cobalt", atomicNumber: 27, atomicMass: 58.933194, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d7" },
    { value: 27, name: "Nickel", atomicNumber: 28, atomicMass: 58.6934, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d8" },
    { value: 28, name: "Copper", atomicNumber: 29, atomicMass: 63.546, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1, 3d10" },
    { value: 29, name: "Zinc", atomicNumber: 30, atomicMass: 65.38, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10" },
    { value: 30, name: "Gallium", atomicNumber: 31, atomicMass: 69.723, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p1" },
    { value: 31, name: "Germanium", atomicNumber: 32, atomicMass: 72.63, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p2" },
    { value: 32, name: "Arsenic", atomicNumber: 33, atomicMass: 74.921595, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p3" },
    { value: 33, name: "Selenium", atomicNumber: 34, atomicMass: 78.971, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p4" },
    { value: 34, name: "Bromine", atomicNumber: 35, atomicMass: 79.904, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p5" },
    { value: 35, name: "Krypton", atomicNumber: 36, atomicMass: 83.798, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6" },
    { value: 36, name: "Rubidium", atomicNumber: 37, atomicMass: 85.4678, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1" },
    { value: 37, name: "Strontium", atomicNumber: 38, atomicMass: 87.62, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2" },
    { value: 38, name: "Yttrium", atomicNumber: 39, atomicMass: 88.90584, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d1" },
    { value: 39, name: "Zirconium", atomicNumber: 40, atomicMass: 91.224, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d2" },
    { value: 40, name: "Niobium", atomicNumber: 41, atomicMass: 92.90637, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d4" },
    { value: 41, name: "Molybdenum", atomicNumber: 42, atomicMass: 95.95, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d5" },
    { value: 42, name: "Technetium", atomicNumber: 43, atomicMass: 98, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d5" },
    { value: 43, name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d7" },
    { value: 44, name: "Rhodium", atomicNumber: 45, atomicMass: 102.9055, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d8" },
    { value: 45, name: "Palladium", atomicNumber: 46, atomicMass: 106.42, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 4d10" },
    { value: 46, name: "Silver", atomicNumber: 47, atomicMass: 107.8682, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d10" },
    { value: 47, name: "Cadmium", atomicNumber: 48, atomicMass: 112.414, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10" },
    { value: 48, name: "Indium", atomicNumber: 49, atomicMass: 114.818, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p1" },
    { value: 49, name: "Tin", atomicNumber: 50, atomicMass: 118.71, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p2" },
    { value: 50, name: "Antimony", atomicNumber: 51, atomicMass: 121.76, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p3" },
    { value: 51, name: "Tellurium", atomicNumber: 52, atomicMass: 127.6, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p4" },  { value: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90447, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p5" },
    { value: 52, name: "Xenon", atomicNumber: 54, atomicMass: 131.293, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6" },
    { value: 53, name: "Cesium", atomicNumber: 55, atomicMass: 132.90545196, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1" },
    { value: 54, name: "Barium", atomicNumber: 56, atomicMass: 137.327, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2" },
    { value: 55, name: "Lanthanum", atomicNumber: 57, atomicMass: 138.90547, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 5d1" },
    { value: 56, name: "Cerium", atomicNumber: 58, atomicMass: 140.116, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f1, 5d1" },
    { value: 57, name: "Praseodymium", atomicNumber: 59, atomicMass: 140.90766, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f3" },
    { value: 58, name: "Neodymium", atomicNumber: 60, atomicMass: 144.242, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f4" },
    { value: 59, name: "Promethium", atomicNumber: 61, atomicMass: 145, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f5" },
    { value: 60, name: "Samarium", atomicNumber: 62, atomicMass: 150.36, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f6" },
    { value: 61, name: "Europium", atomicNumber: 63, atomicMass: 151.964, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f7" },
    { value: 62, name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f7, 5d1" },
    { value: 63, name: "Terbium", atomicNumber: 65, atomicMass: 158.92535, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f9" },
    { value: 64, name: "Dysprosium", atomicNumber: 66, atomicMass: 162.5, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f10" },
    { value: 65, name: "Holmium", atomicNumber: 67, atomicMass: 164.93033, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f11" },
    { value: 66, name: "Erbium", atomicNumber: 68, atomicMass: 167.259, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f12" },
    { value: 67, name: "Thulium", atomicNumber: 69, atomicMass: 168.93422, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f13" },
    { value: 68, name: "Ytterbium", atomicNumber: 70, atomicMass: 173.04, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14" },
    { value: 69, name: "Lutetium", atomicNumber: 71, atomicMass: 174.9668, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d1" },
    { value: 70, name: "Hafnium", atomicNumber: 72, atomicMass: 178.49, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d2" },
    { value: 71, name: "Tantalum", atomicNumber: 73, atomicMass: 180.94788, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d3" },
    { value: 72, name: "Tungsten", atomicNumber: 74, atomicMass: 183.84, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d4" },
    { value: 73, name: "Rhenium", atomicNumber: 75, atomicMass: 186.207, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d5" },
    { value: 74, name: "Osmium", atomicNumber: 76, atomicMass: 190.23, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d6" },
    { value: 75, name: "Iridium", atomicNumber: 77, atomicMass: 192.217, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d7" },
    { value: 76, name: "Platinum", atomicNumber: 78, atomicMass: 195.084, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1, 4f14, 5d9" },
    { value: 77, name: "Gold", atomicNumber: 79, atomicMass: 196.966569, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1, 4f14, 5d10" },
    { value: 78, name: "Mercury", atomicNumber: 80, atomicMass: 200.592, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10" },
    { value: 79, name: "Thallium", atomicNumber: 81, atomicMass: 204.38, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p1" },
    { value: 80, name: "Lead", atomicNumber: 82, atomicMass: 207.2, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p2" },
    { value: 81, name: "Bismuth", atomicNumber: 83, atomicMass: 208.9804, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p3" },
    { value: 82, name: "Polonium", atomicNumber: 84, atomicMass: 209 },
{ value: 83, name: "Astatine", atomicNumber: 85, atomicMass: 210 },
{ value: 84, name: "Radon", atomicNumber: 86, atomicMass: 222 },
{ value: 85, name: "Francium", atomicNumber: 87, atomicMass: 223 },
{ value: 86, name: "Radium", atomicNumber: 88, atomicMass: 226 },
{ value: 87, name: "Actinium", atomicNumber: 89, atomicMass: 227 },
    { value: 88, name: "Thorium", atomicNumber: 90, atomicMass: 232.0377, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 6d2" },
    { value: 89, name: "Protactinium", atomicNumber: 91, atomicMass: 231.03588, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f2, 6d1" },
    { value: 90, name: "Uranium", atomicNumber: 92, atomicMass: 238.02891, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f3, 6d1" },
    { value: 91, name: "Neptunium", atomicNumber: 93, atomicMass: 237, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f4, 6d1" },
    { value: 92, name: "Plutonium", atomicNumber: 94, atomicMass: 244 },
{ value: 93, name: "Americium", atomicNumber: 95, atomicMass: 243 },
{ value: 94, name: "Curium", atomicNumber: 96, atomicMass: 247 },
{ value: 95, name: "Berkelium", atomicNumber: 97, atomicMass: 247 },
{ value: 96, name: "Californium", atomicNumber: 98, atomicMass: 251 },
{ value: 97, name: "Einsteinium", atomicNumber: 99, atomicMass: 252 },
{ value: 98, name: "Fermium", atomicNumber: 100, atomicMass: 257 },
{ value: 99, name: "Mendelevium", atomicNumber: 101, atomicMass: 258 },
{ value: 100, name: "Nobelium", atomicNumber: 102, atomicMass: 259 },
{ value: 101, name: "Lawrencium", atomicNumber: 103, atomicMass: 262 },
{ value: 102, name: "Rutherfordium", atomicNumber: 104, atomicMass: 267 },
{ value: 103, name: "Dubnium", atomicNumber: 105, atomicMass: 270 },
{ value: 104, name: "Seaborgium", atomicNumber: 106, atomicMass: 271 },
{ value: 105, name: "Bohrium", atomicNumber: 107, atomicMass: 270 },
{ value: 106, name: "Hassium", atomicNumber: 108, atomicMass: 277 },
{ value: 107, name: "Meitnerium", atomicNumber: 109, atomicMass: 276 },
{ value: 108, name: "Darmstadtium", atomicNumber: 110, atomicMass: 281 },
{ value: 109, name: "Roentgenium", atomicNumber: 111, atomicMass: 282 },
{ value: 110, name: "Copernicium", atomicNumber: 112, atomicMass: 285 },
{ value: 111, name: "Nihonium", atomicNumber: 113, atomicMass: 286 },
{ value: 112, name: "Flerovium", atomicNumber: 114, atomicMass: 289 },

    { value: 113, name: "Flerovium", 
    atomicNumber: 114, atomicMass: 289 },
    { value: 115, name: "Moscovium", atomicNumber: 115, atomicMass: 290 },
    { value: 116, name: "Livermorium", atomicNumber: 116, atomicMass: 293 },
    { value: 117, name: "Tennessine", atomicNumber: 117, atomicMass: 294 },
    { value: 118, name: "Oganesson", atomicNumber: 118, atomicMass: 294 },
    
  ];

  console.log(98)

let drop2options = [
    {value: 1, name: "1"},
    {value: 2, name: "2"},
    {value: 3, name: "3"},
    {value: 4, name: "4"},
    {value: 5, name: "5"},
    {value: 6, name: "6"},
    {value: 7, name: "7"}
]

let drop3opitons = [
    {value: 0, name: "s"},
    {value: 1, name: "p"},
    {value: 2, name: "d"},
    {value: 3, name: "f"}
]

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");

let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "element", values: inputdrop1 },
  { name: "n", values: inputdrop2 },
  { name: "I", values: inputdrop3 },
];

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.selectedIndex = parameter_value;
    }
  }
}

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

function init() {
  createDropDown(elements, inputdrop1);
  createDropDown(drop2options, inputdrop2);
  createDropDown(drop3opitons, inputdrop3);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();


calcBtn.addEventListener('click', () => {
    let elementSymbol = inputdrop1.value;
    let n = parseInt(inputdrop2.value);
    let l = inputdrop3.value;

    let element = elements.find(e => e.value === elementSymbol);
    let Z = element.atomicNumber;
    let electronConfiguration = element.electronConfiguration;

    let sigma = computeSigma(electronConfiguration, n, l);
    let Zeff = Z - sigma;

    console.log('elementSymbol:', elementSymbol);
console.log('n:', n);
console.log('l:', l);
console.log('Z:', Z);
console.log('electronConfiguration:', electronConfiguration);

let sigma2 = computeSigma(electronConfiguration, n, l);
console.log('sigma2:', sigma2);

    // Display the results
    result.innerHTML = `Value of the shielding: ${sigma.toFixed(2)}<br>Effective charge: ${Zeff.toFixed(2)}`;
});


function computeSigma(electronConfiguration, n, l) {
    let sigma = 0;
    let orbitals = electronConfiguration.replace(/, /g, ' ').split(' ');


    for (let orbital of orbitals) {
        let [orbitalName, electronCount] = orbital.split(' ');
        let [orbitalN, orbitalL] = parseOrbitalName(orbitalName);

        if (orbitalN < n) {
            sigma += electronCount;
        } else if (orbitalN === n) {
            if (l === 's' || l === 'p') {
                if (orbitalL === 's' || orbitalL === 'p') {
                    sigma += 0.35 * (electronCount - 1);
                } else {
                    sigma += 0.35 * electronCount;
                }
            } else if (l === 'd' || l === 'f') {
                if (orbitalL === 's' || orbitalL === 'p') {
                    sigma += 1.00 * electronCount;
                } else if (orbitalL === l) {
                    sigma += 0.35 * (electronCount - 1);
                } else {
                    sigma += 1.00 * electronCount;
                }
            }
        }
    }

    console.log(sigma)
    return sigma;
}

function parseOrbitalName(orbitalName) {
    let n = parseInt(orbitalName.slice(0, -1));
    let l = orbitalName.slice(-1);
    return [n, l];
}

