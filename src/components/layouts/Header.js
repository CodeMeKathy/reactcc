import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header' >
      <h1 className='header-title'>Git Sh*t Done!</h1>
      
      <Link className='link' to='/'>Home</Link> | <Link className='link' to='about'>About</Link>

    </div>
  )
}


// export default Header
