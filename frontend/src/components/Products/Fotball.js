import React,{useState, useEffect} from 'react'
import axios from 'axios'

import { ProductCard } from '../Card/ProductCard'

const BASE_URL = 'http://localhost:5000/api/'

export const Football = () => {

  const [products, setProducts] = useState([])


  const getProduct = async()=>{
    const response = await axios.get(`${BASE_URL}/products`)
    const data = await response.data
    setProducts(data)
    console.log(data);
  }
  useEffect(()=>{
    getProduct()
  },[])


  return (
    <div>
      <h1 >Here we go Football</h1>
      {/* <button onClick={getProduct}>get product</button> */}

      <div className="container">
          {products.map((product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

    </div>


  )
}
