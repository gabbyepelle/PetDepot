const Pet = require("./models/pets");

const mongoose = require("mongoose");
const user = require("./models/user");
const dbUrl = process.env.DB_URL

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR");
    console.log(err);
  });

const seedPets = [
  {
    city: "Boise",
    state: "Idaho",
    breed: "Parakeet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: 1,
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/parakeet_c483if.jpg",
        filename: "PetDepot/parakeet_c483if",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-116.215019, 43.618881],
    },
    category: "birds",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Peabody",
    state: "Massachusetts",
    breed: "Finch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: 1,
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/finch_d2prgr.jpg",
        filename: "PetDepot/finch_d2prgr",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-70.985786, 42.536457],
    },
    category: "birds",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Milwaukee",
    state: "Wisconsin",
    breed: "Brown Rat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: "6 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/rat_ciy1pb.jpg",
        filename: "PetDepot/rat_ciy1pb",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-87.906471, 43.038902],
    },
    category: "small furries",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Nashville-Davidson",
    state: "Tennessee",
    breed: "French Bulldog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 200,
    age: "3",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/bulldog_l1hgs0.jpg",
        filename: "PetDepot/bulldog_l1hgs0",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736919/PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9.jpg",
        filename:
          "PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-86.76796, 36.174465],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Nashville-Davidson",
    state: "Tennessee",
    breed: "Rottweiler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 500,
    age: "8 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/rotweiller_spduc0.jpg",
        filename: "PetDepot/rotweiller_spduc0",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-86.76796, 36.174465],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    breed: "Ragdoll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 2000,
    age: "baby",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678737047/PetDepot/Ragdoll.1_kq5jir.jpg",
        filename: "PetDepot/ragdoll_jrbegz",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ragdoll_jrbegz.jpg",
        filename: "PetDepot/Ragdoll.1_kq5jir",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-80.843124, 35.227085],
    },
    category: "cats",
    sex: "mixed litter",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Aurora",
    state: "Colorado",
    breed: "Russian Blue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1000,
    age: "3 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/russianblue_mkwsoa.jpg",
        filename: "PetDepot/russianblue_mkwsoa",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-104.8125, 39.710835],
    },
    category: "cats",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Laredo",
    state: "Texas",
    breed: "Bearded Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 40,
    age: "3 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/beardeddragon_yyzof3.jpg",
        filename: "PetDepot/beardeddragon_yyzof3",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-99.502914, 27.506748],
    },
    category: "reptiles",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Laredo",
    state: "Texas",
    breed: "Tree Frog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: "3 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/treefrog_gofjzc.jpg",
        filename: "PetDepot/treefrog_gofjzc",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-99.502914, 27.506748],
    },
    category: "amphibians",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Charleston",
    state: "South Carolina",
    breed: "Spotted Swine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 600,
    age: "9 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/spottedswine_ikkdzn.jpg",
        filename: "PetDepot/spottedswine_ikkdzn",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-79.940918, 32.784618],
    },
    category: "livestock",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Tallahassee",
    state: "Florida",
    breed: "Appaloosa Gelding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6000,
    age: "6",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678735057/PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q.png",
        filename:
          "PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-84.253334, 30.455],
    },
    category: "horses and ponies",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "New York",
    state: "New York",
    breed: "Quaker Parrot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 400,
    age: "4",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736099/PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8.jpg",
        filename: "PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-73.935242, 40.73061],
    },
    category: "birds",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Columbus",
    state: "Ohio",
    breed: "Ferret",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100,
    age: "3",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ferret_twzjit.jpg",
        filename: "PetDepot/ferret_twzjit",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-82.98333, 39.983334],
    },
    category: "small furries",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Seattle",
    state: "Washington",
    breed: "Warmblood Horse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100000,
    age: "30",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/warmbloodhorse_kersjq.jpg",
        filename: "PetDepot/warmbloodhorse_kersjq",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.335167, 47.608013],
    },
    category: "horses and ponies",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Seattle",
    state: "Washington",
    breed: "Beagle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1000,
    age: "6",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/beagle_oknghc.jpg",
        filename: "PetDepot/beagle_oknghc",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.335167, 47.608013],
    },
    category: "dogs",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  //
  {
    city: "Los Angeles",
    state: "California",
    breed: "French Bulldog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 300,
    age: "2",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/bulldog_l1hgs0.jpg",
        filename: "PetDepot/bulldog_l1hgs0",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736919/PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9.jpg",
        filename:
          "PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-118.2436849, 34.0522342],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Nashville-Davidson",
    state: "Tennessee",
    breed: "Rottweiler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 500,
    age: "1",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/rotweiller_spduc0.jpg",
        filename: "PetDepot/rotweiller_spduc0",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-86.76796, 36.174465],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    breed: "Ragdoll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 2000,
    age: "1",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678737047/PetDepot/Ragdoll.1_kq5jir.jpg",
        filename: "PetDepot/ragdoll_jrbegz",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ragdoll_jrbegz.jpg",
        filename: "PetDepot/Ragdoll.1_kq5jir",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-80.843124, 35.227085],
    },
    category: "cats",
    sex: "mixed litter",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Aurora",
    state: "Colorado",
    breed: "Russian Blue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1000,
    age: "5 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/russianblue_mkwsoa.jpg",
        filename: "PetDepot/russianblue_mkwsoa",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-104.8125, 39.710835],
    },
    category: "cats",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "San Antonio",
    state: "Texas",
    breed: "Bearded Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 40,
    age: "3 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/beardeddragon_yyzof3.jpg",
        filename: "PetDepot/beardeddragon_yyzof3",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-98.49362819999999, 29.4241219],
    },
    category: "reptiles",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Laredo",
    state: "Texas",
    breed: "Tree Frog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: "baby",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/treefrog_gofjzc.jpg",
        filename: "PetDepot/treefrog_gofjzc",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-99.502914, 27.506748],
    },
    category: "amphibians",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Austin",
    state: "Texas",
    breed: "Spotted Swine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 600,
    age: "9 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/spottedswine_ikkdzn.jpg",
        filename: "PetDepot/spottedswine_ikkdzn",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-97.7430608, 30.267153],
    },
    category: "livestock",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Jacksonville",
    state: "Florida",
    breed: "Appaloosa Gelding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6000,
    age: "6",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678735057/PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q.png",
        filename:
          "PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-81.65565099999999, 30.3321838],
    },
    category: "horses and ponies",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Fort Worth",
    state: "Texas",
    breed: "Quaker Parrot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 400,
    age: "4",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736099/PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8.jpg",
        filename: "PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-97.3307658, 32.7554883],
    },
    category: "birds",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Memphis",
    state: "Tennessee",
    breed: "Ferret",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100,
    age: "3",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ferret_twzjit.jpg",
        filename: "PetDepot/ferret_twzjit",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-90.0489801, 35.1495343],
    },
    category: "small furries",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Seattle",
    state: "Washington",
    breed: "Warmblood Horse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100000,
    age: "3",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/warmbloodhorse_kersjq.jpg",
        filename: "PetDepot/warmbloodhorse_kersjq",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.335167, 47.608013],
    },
    category: "horses and ponies",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Seattle",
    state: "Washington",
    breed: "Beagle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1000,
    age: "2",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/beagle_oknghc.jpg",
        filename: "PetDepot/beagle_oknghc",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.335167, 47.608013],
    },
    category: "dogs",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  //
  {
    city: "Baltimoree",
    state: "Maryland",
    breed: "Parakeet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: 1,
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/parakeet_c483if.jpg",
        filename: "PetDepot/parakeet_c483if",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-76.6121893, 39.2903848],
    },
    category: "birds",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Portland",
    state: "Oregon",
    breed: "Finch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: 1,
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/finch_d2prgr.jpg",
        filename: "PetDepot/finch_d2prgr",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-122.6764816, 45.5230622],
    },
    category: "birds",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Milwaukee",
    state: "Wisconsin",
    breed: "French Bulldog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 200,
    age: "3",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/bulldog_l1hgs0.jpg",
        filename: "PetDepot/bulldog_l1hgs0",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736919/PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9.jpg",
        filename:
          "PetDepot/frenchie-gty-er-221130_1669832578488_hpMain_1x1_992_ybjpx9",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-87.9064736, 43.0389025],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Tuscan",
    state: "Arizona",
    breed: "Rottweiler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 500,
    age: "8 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/rotweiller_spduc0.jpg",
        filename: "PetDepot/rotweiller_spduc0",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-110.926479, 32.2217429],
    },
    category: "dogs",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Fresno",
    state: "California",
    breed: "Ragdoll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 2000,
    age: "baby",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678737047/PetDepot/Ragdoll.1_kq5jir.jpg",
        filename: "PetDepot/ragdoll_jrbegz",
      },
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ragdoll_jrbegz.jpg",
        filename: "PetDepot/Ragdoll.1_kq5jir",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-119.7725868, 36.7468422],
    },
    category: "cats",
    sex: "mixed litter",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Aurora",
    state: "Colorado",
    breed: "Russian Blue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1000,
    age: "2",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/russianblue_mkwsoa.jpg",
        filename: "PetDepot/russianblue_mkwsoa",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-104.8125, 39.710835],
    },
    category: "cats",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Kansas City",
    state: "Missouri",
    breed: "Bearded Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 40,
    age: "3 months",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/beardeddragon_yyzof3.jpg",
        filename: "PetDepot/beardeddragon_yyzof3",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-94.5785667, 39.0997265],
    },
    category: "reptiles",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Laredo",
    state: "Texas",
    breed: "Tree Frog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 20,
    age: "baby",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/treefrog_gofjzc.jpg",
        filename: "PetDepot/treefrog_gofjzc",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-99.502914, 27.506748],
    },
    category: "amphibians",
    sex: "male",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Charleston",
    state: "South Carolina",
    breed: "Spotted Swine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 600,
    age: "1",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732848/PetDepot/spottedswine_ikkdzn.jpg",
        filename: "PetDepot/spottedswine_ikkdzn",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-79.940918, 32.784618],
    },
    category: "livestock",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Tallahassee",
    state: "Florida",
    breed: "Appaloosa Gelding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6000,
    age: "4",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678735057/PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q.png",
        filename:
          "PetDepot/appaloosa-gelding--il_71e37173-750a-4c91-af5d-d45c7ca047f8_f9xq2q",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-84.253334, 30.455],
    },
    category: "horses and ponies",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "New York",
    state: "New York",
    breed: "Quaker Parrot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 400,
    age: "2",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678736099/PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8.jpg",
        filename: "PetDepot/f0bf7f94a1334d75646a098c04b6a38d_vkwnu8",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-73.935242, 40.73061],
    },
    category: "birds",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  {
    city: "Columbus",
    state: "Ohio",
    breed: "Ferret",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100,
    age: "1",
    images: [
      {
        url: "https://res.cloudinary.com/djjiwoioz/image/upload/v1678732847/PetDepot/ferret_twzjit.jpg",
        filename: "PetDepot/ferret_twzjit",
      },
    ],
    geometry: {
      type: "Point",
      coordinates: [-82.98333, 39.983334],
    },
    category: "small furries",
    sex: "female",
    author: "64248a082c6e727decad85eb",
    date: new Date(),
  },
  

];

async function main() {
  // await Pet.deleteMany({});
  const owner = await user.findById('64248a082c6e727decad85eb')
  Pet.insertMany(seedPets)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}


async function seedOwnerss(){
  const pets = await Pet.find({});
  const owner = await user.findById("64248a082c6e727decad85eb")
  owner.pets.push(...pets)
  await owner.save()
}
  
main();
seedOwnerss();



// async function deleteUser() {
//   await user.findByIdAndDelete(""64248a082c6e727decad85eb"
//");
//   console.log("done");
// }

// deleteUser();

