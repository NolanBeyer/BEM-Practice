import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <h3>Your logo</h3>
        <ul className='navbar__links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
