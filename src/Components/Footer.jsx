import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-bg-dark  py-5'>
      <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-md-3">
          <Link to="/home">
            <img className='w-50' src="./images/wakanda.png" alt="Logo" />
          </Link>
        </div>

        <div className="col-md-4">
          <h2>Links</h2>
          <ul className="list-unstyled fs-5">
            <li>
              <Link className='text-reset text-decoration-none' to="/">Home</Link>
            </li>
            <li>
              <Link className='text-reset text-decoration-none' to="/about">About</Link>
            </li>
            <li>
              <Link className='text-reset text-decoration-none' to="/contact">Contatc</Link>
            </li>
          </ul>

          <h2>Social links</h2>
          <ul className="list-unstyled d-flex gap-5">
            <li>
              <a target="_blank" className='text-reset text-decoration-none' href="https://facebook.com">
                <i className="fa-brands fa-2x fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a target="_blank" className='text-reset text-decoration-none' href="https://instagram.com">
                <i className="fa-brands fa-2x fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" className='text-reset text-decoration-none' href="https://telegram.org">
                <i className="fa-brands fa-2x fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5">
          <h2>Subscribe to or newsletter</h2>
          <form>
            <label htmlFor="email" className='form-label'>Your Email</label>
            <input type="email" name='email' id='email' className='form-control' placeholder='example@mail.ru' />
            <button type="submit" className="btn btn-danger w-100 mt-3">Subscribe</button>
          </form>
        </div>
        </div>
        


      </div>
    </footer>
  )
}

export default Footer
