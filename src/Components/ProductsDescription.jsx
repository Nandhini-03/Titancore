// import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import productAPI from '../API/Products'
import { useRecoilState } from 'recoil';
import { DynamicDescription } from '../recoil/Products';

const ProductsDescription = () => {
    const location =useLocation();
    // console.log(location)
    console.log("location",location.state)

    const [productDescription,setProductDescription] = useRecoilState(DynamicDescription)
    useEffect(()=>
    {
        const fetchData=async() =>
        {
            try{
                const response=await productAPI.getDynamicDescription(location.state.productId)
                setProductDescription(response)
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchData()
    },[])

    // console.log("Image",location.state.productImg)
    console.log("product description",productDescription)

  return (
    <div>
        <div style={{width:"70%",margin:"auto",backgroundColor:"antiquewhite",minHeight:"90vh"}}>
            <div style={{margin:"0 30px",display:"flex"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}>
                    <div style={{maxWidth:"400px",maxHeight:"500px",overflow:"hidden",marginRight:"30px",borderRadius:"10px"}}>
                        <img style={{width:"100%",objectFit:"cover",height:"50%"}} src={`data:image/jpeg;base64,${location.state.productImg}`}/>
                    </div>
                </div>
                <div style={{margin:"30px"}}>
                    <div>
                        <h2>Product Name</h2>
                        <p>{location.state.productName}</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{location.state.productDescription ? location.state.productDescription : productDescription}</p>
                    </div>
                </div>
            </div>
            
        </div>
        {/* {location.state.productId}
        {location.state.ProductsDescription} */}
    </div>
  )
}

export default ProductsDescription
