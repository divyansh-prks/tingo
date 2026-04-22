import { link } from 'fs'
import React from 'react'

const Navbar = () => {

    const linkshu = [
        {
            title : "Guide", 
            href : "#"
        }, 
        {
            title : "Pricing" , 
            href : "#" 
        }, 
        {
            title : "Login" , 
            href : "#"
        }
    ]
  return (
    <div className='navbar-root'>

        <div className='logo'> FinTech </div>
        <div className='links'>

        {linkshu.map((item , idx) => 
            <a className='link-items' key={item.title} href={item.href}> {item.title} </a>
        )}
        <div>

            <button className='btn'> Start free trial</button>
    
        </div>

        </div>
    </div>
       
  )
}

export default Navbar