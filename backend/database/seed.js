const {Users} = require('../models/userModel')
const { sweuyghurDB} = require('../models/userModel')

const {Products} = require('../models/ProductsModel')
// const { sweuyghurDB} = require('./connection')

const users = require('./users.json')
const products = require('./products.json')


const createUsers = async () =>{
    await Users.deleteMany({})

    users.forEach( async (user)=>{
        const newUsers = await new Users(user)
        await newUsers.save()
        console.log('User saved!')
    })
    console.log(createUsers)
    console.log(`USERS CREATED WITH ${users.length} USERS IN DATABASE....`)
}



const createProducts = async () =>{
    await Products.deleteMany({})

    products.forEach( async (product)=>{
        const newProducts = await new Products(product)
        await newProducts.save()
        console.log('Products saved!')
    })

    console.log(`${products.length} PRODUCTS INSERT I DATABASE...`)

}

sweuyghurDB();
createUsers();
createProducts()