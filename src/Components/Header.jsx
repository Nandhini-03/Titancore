// import React from 'react'

const Header = () => {
  return (
    <div style={{position:"absolute",backgroundColor:"rgba(56, 69, 90, 0.5)",width:"100%"}}>
        <div style={{margin:"0 50px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex"}}>Spotify</div>
            <div style={{display:"flex"}}>
                <p style={{marginRight:"15px"}}>Premium</p>
                <p style={{marginRight:"15px"}}>Support</p>
                <p style={{marginRight:"15px"}}>Download</p>
                <div style={{height:"18px",border:"1px solid black",marginTop:"13px"}}></div>
            </div>
        </div>
    </div>
  )
}

export default Header
