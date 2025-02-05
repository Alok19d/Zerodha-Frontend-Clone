import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
  return (
    <>
      <Navbar />
      <section className='products-header'>
        <h1>Zerodha Products</h1>
        <p className='landing-subheading'>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <a>investment offerings <FontAwesomeIcon icon={faArrowRightLong} /></a></p>
      </section>
      <section>
        
      </section>
      <Footer />
    </>
  )
}

export default Products