const elements = [
    { value: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008, electronConfiguration: "1s1" },
    { value: "He", name: "Helium", atomicNumber: 2, atomicMass: 4.002602, electronConfiguration: "1s2" },
    { value: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.94, electronConfiguration: "1s2, 2s1" },
    { value: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: 9.0122, electronConfiguration: "1s2, 2s2" },
    { value: "B", name: "Boron", atomicNumber: 5, atomicMass: 10.81, electronConfiguration: "1s2, 2s2, 2p1" },
    { value: "C", name: "Carbon", atomicNumber: 6, atomicMass: 12.011, electronConfiguration: "1s2, 2s2, 2p2" },
    { value: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: 14.007, electronConfiguration: "1s2, 2s2, 2p3" },
    { value: "O", name: "Oxygen", atomicNumber: 8, atomicMass: 15.999, electronConfiguration: "1s2, 2s2, 2p4" },
    { value: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 18.998403163, electronConfiguration: "1s2, 2s2, 2p5" },
    { value: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.1797, electronConfiguration: "1s2, 2s2, 2p6" },
    { value: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.98976928, electronConfiguration: "1s2, 2s2, 2p6, 3s1" },
    { value: "Mg", name: "Magnesium", atomicNumber: 12, atomicMass: 24.305, electronConfiguration: "1s2, 2s2, 2p6, 3s2" },
    { value: "Al", name: "Aluminum", atomicNumber: 13, atomicMass: 26.9815385, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p1" },
    { value: "Si", name: "Silicon", atomicNumber: 14, atomicMass: 28.085, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p2" },
    { value: "P", name: "Phosphorus", atomicNumber: 15, atomicMass: 30.973761998, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p3" },
    { value: "S", name: "Sulfur", atomicNumber: 16, atomicMass: 32.06, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p4" },
    { value: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p5" },
    { value: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.948, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6" },
    { value: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.0983, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1" },
    { value: "Ca", name: "Calcium", atomicNumber: 20, atomicMass: 40.078, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2" },
    { value: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.955908, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d1" },
    { value: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.867, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d2" },
    { value: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.9415, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d3" },
    { value: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 51.9961, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1, 3d5" },
    { value: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.938044, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d5" },
    { value: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.845, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d6" },
    { value: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.933194, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d7" },
    { value: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.6934, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d8" },
    { value: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.546, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s1, 3d10" },
    { value: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10" },
    { value: "Ga", name: "Gallium", atomicNumber: 31, atomicMass: 69.723, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p1" },
    { value: "Ge", name: "Germanium", atomicNumber: 32, atomicMass: 72.63, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p2" },
    { value: "As", name: "Arsenic", atomicNumber: 33, atomicMass: 74.921595, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p3" },
    { value: "Se", name: "Selenium", atomicNumber: 34, atomicMass: 78.971, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p4" },
    { value: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.904, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p5" },
    { value: "Kr", name: "Krypton", atomicNumber: 36, atomicMass: 83.798, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6" },
    { value: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.4678, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1" },
    { value: "Sr", name: "Strontium", atomicNumber: 38, atomicMass: 87.62, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2" },
    { value: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.90584, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d1" },
    { value: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.224, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d2" },
    { value: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.90637, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d4" },
    { value: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.95, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d5" },
    { value: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d5" },
    { value: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d7" },
    { value: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.9055, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d8" },
    { value: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 4d10" },
    { value: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.8682, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s1, 4d10" },
    { value: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.414, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10" },
    { value: "In", name: "Indium", atomicNumber: 49, atomicMass: 114.818, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p1" },
    { value: "Sn", name: "Tin", atomicNumber: 50, atomicMass: 118.71, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p2" },
    { value: "Sb", name: "Antimony", atomicNumber: 51, atomicMass: 121.76, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p3" },
    { value: "Te", name: "Tellurium", atomicNumber: 52, atomicMass: 127.6, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p4" },  { value: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90447, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p5" },
    { value: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.293, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6" },
    { value: "Cs", name: "Cesium", atomicNumber: 55, atomicMass: 132.90545196, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1" },
    { value: "Ba", name: "Barium", atomicNumber: 56, atomicMass: 137.327, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2" },
    { value: "La", name: "Lanthanum", atomicNumber: 57, atomicMass: 138.90547, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 5d1" },
    { value: "Ce", name: "Cerium", atomicNumber: 58, atomicMass: 140.116, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f1, 5d1" },
    { value: "Pr", name: "Praseodymium", atomicNumber: 59, atomicMass: 140.90766, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f3" },
    { value: "Nd", name: "Neodymium", atomicNumber: 60, atomicMass: 144.242, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f4" },
    { value: "Pm", name: "Promethium", atomicNumber: 61, atomicMass: 145, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f5" },
    { value: "Sm", name: "Samarium", atomicNumber: 62, atomicMass: 150.36, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f6" },
    { value: "Eu", name: "Europium", atomicNumber: 63, atomicMass: 151.964, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f7" },
    { value: "Gd", name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f7, 5d1" },
    { value: "Tb", name: "Terbium", atomicNumber: 65, atomicMass: 158.92535, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f9" },
    { value: "Dy", name: "Dysprosium", atomicNumber: 66, atomicMass: 162.5, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f10" },
    { value: "Ho", name: "Holmium", atomicNumber: 67, atomicMass: 164.93033, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f11" },
    { value: "Er", name: "Erbium", atomicNumber: 68, atomicMass: 167.259, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f12" },
    { value: "Tm", name: "Thulium", atomicNumber: 69, atomicMass: 168.93422, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f13" },
    { value: "Yb", name: "Ytterbium", atomicNumber: 70, atomicMass: 173.04, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14" },
    { value: "Lu", name: "Lutetium", atomicNumber: 71, atomicMass: 174.9668, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d1" },
    { value: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d2" },
    { value: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.94788, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d3" },
    { value: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d4" },
    { value: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.207, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d5" },
    { value: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d6" },
    { value: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.217, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d7" },
    { value: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.084, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1, 4f14, 5d9" },
    { value: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.966569, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s1, 4f14, 5d10" },
    { value: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.592, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10" },
    { value: "Tl", name: "Thallium", atomicNumber: 81, atomicMass: 204.38, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p1" },
    { value: "Pb", name: "Lead", atomicNumber: 82, atomicMass: 207.2, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p2" },
    { value: "Bi", name: "Bismuth", atomicNumber: 83, atomicMass: 208.9804, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p3" },
    { value: "Po", name: "Polonium", atomicNumber: 84, atomicMass: 209 },
{ value: "At", name: "Astatine", atomicNumber: 85, atomicMass: 210 },
{ value: "Rn", name: "Radon", atomicNumber: 86, atomicMass: 222 },
{ value: "Fr", name: "Francium", atomicNumber: 87, atomicMass: 223 },
{ value: "Ra", name: "Radium", atomicNumber: 88, atomicMass: 226 },
{ value: "Ac", name: "Actinium", atomicNumber: 89, atomicMass: 227 },
    { value: "Th", name: "Thorium", atomicNumber: 90, atomicMass: 232.0377, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 6d2" },
    { value: "Pa", name: "Protactinium", atomicNumber: 91, atomicMass: 231.03588, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f2, 6d1" },
    { value: "U", name: "Uranium", atomicNumber: 92, atomicMass: 238.02891, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f3, 6d1" },
    { value: "Np", name: "Neptunium", atomicNumber: 93, atomicMass: 237, electronConfiguration: "1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f4, 6d1" },
    { value: "Pu", name: "Plutonium", atomicNumber: 94, atomicMass: 244 },
{ value: "Am", name: "Americium", atomicNumber: 95, atomicMass: 243 },
{ value: "Cm", name: "Curium", atomicNumber: 96, atomicMass: 247 },
{ value: "Bk", name: "Berkelium", atomicNumber: 97, atomicMass: 247 },
{ value: "Cf", name: "Californium", atomicNumber: 98, atomicMass: 251 },
{ value: "Es", name: "Einsteinium", atomicNumber: 99, atomicMass: 252 },
{ value: "Fm", name: "Fermium", atomicNumber: 100, atomicMass: 257 },
{ value: "Md", name: "Mendelevium", atomicNumber: 101, atomicMass: 258 },
{ value: "No", name: "Nobelium", atomicNumber: 102, atomicMass: 259 },
{ value: "Lr", name: "Lawrencium", atomicNumber: 103, atomicMass: 262 },
{ value: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267 },
{ value: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 270 },
{ value: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 271 },
{ value: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270 },
{ value: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 277 },
{ value: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 276 },
{ value: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281 },
{ value: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 282 },
{ value: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285 },
{ value: "Nh", name: "Nihonium", atomicNumber: 113, atomicMass: 286 },
{ value: "Fl", name: "Flerovium", atomicNumber: 114, atomicMass: 289 },
    { value: "Fl", name: "Flerovium", 
    atomicNumber: 114, atomicMass: 289 },
    { value: "Mc", name: "Moscovium", atomicNumber: 115, atomicMass: 290 },
    { value: "Lv", name: "Livermorium", atomicNumber: 116, atomicMass: 293 },
    { value: "Ts", name: "Tennessine", atomicNumber: 117, atomicMass: 294 },
    { value: "Og", name: "Oganesson", atomicNumber: 118, atomicMass: 294 },
    
  ];


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let inputdrop5 = document.getElementById("inputdrop5");
let inputdrop6 = document.getElementById("inputdrop6");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

elements.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.value = "H";
    inputdrop1.add(opt);
    inputdrop2.add(opt.cloneNode(true));
    inputdrop3.add(opt.cloneNode(true));
    inputdrop4.add(opt.cloneNode(true));
    inputdrop5.add(opt.cloneNode(true));
    inputdrop6.add(opt.cloneNode(true));
});

inputdrop2.value = "He"
inputdrop3.value = "Li"
inputdrop4.value = "N"
inputdrop5.value = "Be"
inputdrop6.value = "B"

input1.value = 1
input2.value = 0
input3.value = 0
input4.value = 0
input5.value = 0
input6.value = 0

function calculate() {
    // Get the selected elements and their quantities
    const selectedElements = [
      { element: inputdrop1.value, quantity: parseFloat(input1.value) },
      { element: inputdrop2.value, quantity: parseFloat(input2.value) },
      { element: inputdrop3.value, quantity: parseFloat(input3.value) },
      { element: inputdrop4.value, quantity: parseFloat(input4.value) },
      { element: inputdrop5.value, quantity: parseFloat(input5.value) },
      { element: inputdrop6.value, quantity: parseFloat(input6.value) },
    ];
  
    // Calculate the molecular weight
    let molecularWeight = 0;
    for (const selection of selectedElements) {
      const selectedElement = elements.find((el) => el.value === selection.element);
      if (selectedElement) {
        molecularWeight += selectedElement.atomicMass * selection.quantity;
      }
    }
  
    // Display the result
    result.textContent = `Molecular Weight: ${molecularWeight.toFixed(3)} g/mol`;
  }
  
console.log(98)