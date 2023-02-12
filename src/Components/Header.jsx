import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='text-bg-dark py-3 fs-4 sticky-top shadow'>
      <nav className="container d-flex align-items-center justify-content-between">
        <Link className='text-reset text-decoration-none' to="/">
          <img width="60px" src="./images/wakanda.png" alt="LOGO" />
        </Link>

        <ul className="list-unstyled m-0 d-flex align-items-center gap-3">
          <li>
            <Link className='text-reset text-decoration-none' to="/">Home</Link>
          </li>
          <li>
            <Link className='text-reset text-decoration-none' to="/about">About</Link>
          </li>
          <li>
            <Link className='text-reset text-decoration-none' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
