import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons/faArrowRightLong'

const Home = () => {

  return (
    <>
      <Navbar/>
      <main className='homepage'>
        <section className='landing'>
          <div className='container hero-background'>
            <img src="/hero-img.png" />
            <h1> Invest in everything </h1>
            <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link to="/open-account" className='cta-btn'>Sign up for free</Link>
          </div>
        </section>
        <section className='ecosystem'>
          <div className='container eco-container'>
            <div className='eco-left'>
              <h2>Trust with confidence</h2>
              <div>
                <h3>Customer-first always</h3>
                <p>That&apos;s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
              </div>
              <div>
                <h3>No spam or gimmicks</h3>
                <p>No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              </div>
              <div>
                <h3>The Zerodha universe</h3>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              </div>
              <div>
                <h3>Do better with money</h3>
                <p>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don&apos;t just facilitate transactions, but actively help you do better with your money.</p>
              </div>
            </div>
            <div className='eco-right'>
              <a href="">
                <img src="./ecosystem.png"/>
              </a>
              <p>
                <a href="">
                Explore our products 
                <span className='icon'>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </a>
                <a href="" className='demo-link'>
                Try Kite Demo 
                <span className='icon'>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
                </a>
              </p>
            </div>
          </div>
          <div className='press-strip'>
            <a>
              <img src="./press-logos.png"/>
            </a>
          </div>
        </section>
        <section className='pricing'>
          <div className='container'>
            <div className='pricing-top'>
              <div className='pricing-tl'>
                <h2>Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              </div>
              <div className='pricing-tr'>
                <div className='pricing-box'>
                  <img src="./pricing-eq.svg"/>
                  <p>Free account <br />opening</p>
                </div>
                <div className='pricing-box'>
                  <img src="./pricing-eq.svg"/>
                  <p>Free equity delivery
                  <br />and direct mutual funds</p>
                </div>
                <div className='pricing-box'>
                  <img src="./other-trades.svg"/>
                  <p>Intraday and
                  <br />F&O</p>
                </div>
              </div>
            </div>
            <div className='pricing-bottom'>
              <a>
              See pricing  
              <span className='icon'>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              </a>
            </div>
          </div>
        </section>
        <section className='free-education'>
          <div className='container edu-container'>
            <div className='edu-left-item'>
              <img src="./index-education.svg" />
            </div>
            <div className='edu-right-item'>
              <h2>Free and open market education</h2>
              <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href="">
              Varsity
              <span className='icon'>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              </a>
              <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href="">
              TradingQ&A
              <span className='icon'>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
              </a>
            </div>
          </div>
        </section>
        <section className='kite-section'>
          <div className='mini-container kite-container'>
            <h2>Open a Zerodha account</h2>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link className='cta-btn' to="/open-account">
              Sign up for free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home