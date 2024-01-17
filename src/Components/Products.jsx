// import React from 'react'

import { useEffect } from 'react';
import ProductAPI from '../API/Products'
import ProductCards from './ProductCards';
import { ProductsState } from '../recoil/Products';
import { useRecoilState } from 'recoil';
// import Slider from './Slider'

const Products = () => {
  const [staticData,setStaticDatas] = useRecoilState(ProductsState)
  // const [staticData,setStaticDatas] = useState([])
  



  useEffect(() =>
  {
    const fetchData=async() =>
    {
      try
      {
        const response=await ProductAPI.getStaticProducts()
        console.log("static",response)
        setStaticDatas(response)
        
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchData();
    console.log("test",staticData);
  },[])



  

  return (
    <div>
      <h2>Products</h2>
      {/* <Slider Data={staticData}/> */}
      <ProductCards Data={staticData}/>
    </div>
  )
}

export default Products
