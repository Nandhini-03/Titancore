// import React from 'react'
import Header from './Header'
import Products from './Products'
import ProductsId from './ProductsId'
// import Slider from './Slider'

const HomePage = () => {
  return (
      <div style={{margin:"0", backgroundColor: "#9C6DA2", minHeight:"200vh",position: "relative" }}>
          <Header />
          <div style={{top:'100px',position:"relative",margin:"0 50px"}}>
            <img style={{width:"100%"}} src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ee4cfe398734c78d.jpg?q=20' />
            <Products />
            <ProductsId />
            {/* <Slider /> */}
          </div>
      </div>
  )
}

export default HomePage
