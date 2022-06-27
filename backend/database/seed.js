const { sweuyghurDB } = require("./index");
const { User } = require("../models/userModel");
const { Products } = require("../models/ProductsModel");

const users = require("./users.json");
const products = require("./products.json");

const createUser = async () => {
  await User.deleteMany({});

  users.forEach(async (user) => {
    const newUser = await new User(user);
    await newUser.save();
    console.log("User saved!");
  });
  console.log(createUser);
  console.log(`USERS CREATED WITH ${users.length} USERS IN DATABASE....`);
};

const createProducts = async () => {
  await Products.deleteMany({});

  products.forEach(async (product) => {
    const newProducts = await new Products(product);
    await newProducts.save();
    console.log("Products saved!");
  });

  console.log(`${products.length} PRODUCTS INSERT I DATABASE...`);
};

sweuyghurDB();
createUser();
createProducts();
