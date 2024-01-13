// import React from 'react'
import { useLocation } from 'react-router-dom';
const ProductsDescription = () => {
    const location =useLocation();
    console.log(location)
    console.log(location.state)

  return (
    <div>
        <div style={{width:"70%",margin:"auto",backgroundColor:"antiquewhite",minHeight:"90vh"}}>
            <div style={{margin:"0 30px",display:"flex"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}>
                    <div style={{maxWidth:"400px",maxHeight:"500px",overflow:"hidden",marginRight:"30px",borderRadius:"10px"}}>
                        <img style={{width:"100%",objectFit:"cover",height:"100%"}} src={location.state.productImg}/>
                    </div>
                </div>
                <div style={{margin:"30px"}}>
                    <div>
                        <h2>Product Name</h2>
                        <p>{location.state.productName}</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{location.state.productDescription}</p>
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
