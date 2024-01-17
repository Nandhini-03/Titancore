// import React from 'react'
import { useEffect } from 'react';
import ProductAPI from '../API/Products'
import ProductCards from "./ProductCards"
import { useRecoilState } from 'recoil';
import {DynamicProducts} from '../recoil/Products'

const ProductsId = () => {
const [dynamicData,setDynamicData] = useRecoilState(DynamicProducts)
// const [dynamicData,setDynamicData]=useState([])
    useEffect(() =>
    {
      const fetchData=async() =>
      {
        try
        {
          const response=await ProductAPI.getTrendProducts()
          console.log("dynamic",response)
          setDynamicData(response)
          // console.log(response)
        }
        catch(error)
        {
          console.log(error)
        }
      }
      fetchData()
    },[])
    // console.log("DynamicData",dynamicData)

  return (
    <div>
      <h2>Based on Recent Trend</h2>
      <ProductCards Data={dynamicData}/>
    </div>
  )
}

export default ProductsId
