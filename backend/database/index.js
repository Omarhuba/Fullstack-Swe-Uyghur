const mongoose = require("mongoose");
require("dotenv").config();

const sweuyghurDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    // await mongoose.connect(`${DATABASE_URI}sweuyghur`);
    console.log("CONNECTED TO THE DB....");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = { sweuyghurDB };

//om man använder den så kan man anropa direkt app.js för att connect

// mongoose.connect(`${DATABASE_URI}sweuyughur`)
// .then(()=>{console.log('DATABASE IS CONNECTED........')})
// .catch(err => console.log(err))
