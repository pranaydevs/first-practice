import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <span>Redux with Nexts</span>
        <div>
            <Link className='navLink' href={"/"}> Home</Link>
            <Link className='navLink' href={"/all-prodducts"}> Products</Link> 
            <Link className='navLink' href={"/my-posts"}> Blogs</Link>           
            <Link className='navLink' href={"/cart"} style={{marginRight:"7px"}}> Cart</Link>
            <span>Items:0</span>
        </div>

    </div>
  )
}

export default Navbar