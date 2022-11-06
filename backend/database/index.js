const mongoose = require("mongoose");
require("dotenv").config();
const { User } = require("../models/userModel");
const { Products } = require("../models/productsModel");
const users = require("./users.json");
const products = require("./products.json");

// .  insert seed direkt database connections

const sweuyghurDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    // await mongoose.connect(`${DATABASE_URI}sweuyghur`);
    console.log("CONNECTED TO THE DB....");

    const seedDB = async()=>{
      await User.deleteMany({})
      await User.insertMany(users)
      await Products.deleteMany({})
      await Products.insertMany(products)
    }
    seedDB()
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = { sweuyghurDB };

//om man använder den så kan man anropa direkt app.js för att connect

// mongoose.connect(`${DATABASE_URI}sweuyughur`)
// .then(()=>{console.log('DATABASE IS CONNECTED........')})
// .catch(err => console.log(err))
