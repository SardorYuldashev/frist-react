import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <section id='showcase' className='text-bg-light min-vh-100 d-flex align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-1">Wakanda</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ad recusandae commodi in ratione culpa fuga. Molestias dignissimos maxime nobis repudiandae nihil iste a accusamus quam. Eius eum tenetur vero?</p>
            <Link to="/about" className='btn btn-outline-primary'>About us</Link>
            <Link to="/contact" className='btn btn-success ms-3'>Contatc us</Link>
          </div>
          <div className="col-md-6">
            <img src="https://u.9111s.ru/uploads/202107/03/239c372f206c93906de11499ebecd182.jpg" alt="wakanda" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
