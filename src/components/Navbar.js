import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/" className='logo'>DhisaPro</Link>
        <ul>
            <li><Link to="/about" className='navbar-text'>about</Link></li>
            <li><Link to="/project" className='navbar-text'>project</Link></li>
            <li><Link to="/work" className='navbar-text'>work</Link></li>
        </ul>
    </div>
  )
}

export default Navbar