import React from 'react'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Showcase from '../Components/Showcase'
import Trailer from '../Components/Trailer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Showcase />
      <Cards />
      <Trailer />
      <Footer />
    </div>
  )
}

export default Home
