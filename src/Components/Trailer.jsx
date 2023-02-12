import React from 'react'
import { Link } from 'react-router-dom'

const Trailer = () => {
  return (
    <section id='trailer' className='text-bg-info py-5'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md-6">
            <h2 className="display-4">
              Watch our new trailer
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis illo quis corporis cumque, iusto nam nemo qui quia sint perspiciatis animi pariatur soluta, voluptatum provident labore explicabo quidem est saepe!
            </p>
            <Link to="/about" className='btn btn-success w-100'>More details</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trailer
