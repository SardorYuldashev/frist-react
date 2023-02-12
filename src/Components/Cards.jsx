import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
    <div className="card">
      <img src="https://www.themarysue.com/wp-content/uploads/2018/08/wakanda-infinity-war-avengers-4.jpg" alt="The one" className='card-img-top' />
      <div className="card-body">
        <h3 className="card-title">Wakanda forewer</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem voluptatum iste, velit provident impedit sequi dolorum! Nihil earum possimus vero dolorum. Molestias eligendi officiis corporis, expedita mollitia possimus dolorem.</p>
      </div>
      <div className="card-footer">
        <div className="row g-3">
          <div className="col-6">
            <Link to="/about" className='btn w-100 btn-outline-primary'>About</Link>
          </div>
          <div className="col-6">
            <Link to="/contact" className='btn w-100 btn-success'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card2 = () => {
  return (
    <div className="card">
      <img src="https://webpulse.imgsmail.ru/imgpreview?key=pic7421439324762156986&mb=pulse" alt="The one" className='card-img-top' />
      <div className="card-body">
        <h3 className="card-title">Wakanda forewer</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem voluptatum iste, velit provident impedit sequi dolorum! Nihil earum possimus vero dolorum. Molestias eligendi officiis corporis, expedita mollitia possimus dolorem.</p>
      </div>
      <div className="card-footer">
        <div className="row g-3">
          <div className="col-6">
            <Link to="/about" className='btn w-100 btn-outline-primary'>About</Link>
          </div>
          <div className="col-6">
            <Link to="/contact" className='btn w-100 btn-success'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card3 = () => {
  return (
    <div className="card">
      <img src="https://img.championat.com/i/y/m/1668264124876562258.jpg" alt="The one" className='card-img-top' />
      <div className="card-body">
        <h3 className="card-title">Wakanda forewer</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem voluptatum iste, velit provident impedit sequi dolorum! Nihil earum possimus vero dolorum. Molestias eligendi officiis corporis, expedita mollitia possimus dolorem.</p>
      </div>
      <div className="card-footer">
        <div className="row g-3">
          <div className="col-6">
            <Link to="/about" className='btn w-100 btn-outline-primary'>About</Link>
          </div>
          <div className="col-6">
            <Link to="/contact" className='btn w-100 btn-success'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <section id='cards' className='py-5'>
      <div className="container">
        <h2 className="display-4 text-light">Movies</h2>
        <div className="row g-5 d-flex align-items-center">
          <div className="col-md-4">
            <Card1 />
          </div>
          <div className="col-md-4">
            <Card2 />
          </div>
          <div className="col-md-4">
            <Card3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
