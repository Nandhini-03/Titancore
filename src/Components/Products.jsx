// import React from 'react'

import { useEffect } from 'react';
import ProductAPI from '../API/Products'
import ProductCards from './ProductCards';
import { ProductsState } from '../recoil/Products';
import { useRecoilState } from 'recoil';

const Products = () => {
  const [staticData,setStaticDatas] = useRecoilState(ProductsState)
  // const [staticData,setStaticDatas] = useState([])
  

 console.log("data",staticData)

  useEffect(() =>
  {
    const fetchData=async() =>
    {
      try
      {
        const response=await ProductAPI.getStaticProducts()
        // console.log(response.data)
        setStaticDatas(response.data)
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData();
  },[])
  // console.log("StaticData",staticData)


  return (
    <div>
      <h2>Products</h2>
      <ProductCards Data={staticData}/>
    </div>
  )
}

export default Products
