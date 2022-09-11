const {Products} = require('../models/productsModel')


const getProducts = async (req, res) => {
    try {
      const allProducts = await Products.find({}).exec();
    //   const getByRole = allUser.filter((user) => user.role == role);
      res.json(allProducts);

    } catch (err) {
      res.status(400).json(err.message);
    }
  };


  module.exports = { getProducts };