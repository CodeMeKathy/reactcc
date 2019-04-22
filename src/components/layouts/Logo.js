import React from 'react'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link className='link' to='/'><h4 className='logo'>CodeMeKathy</h4></Link>
    </div>
  )
}
