import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {

  return (
    <>
      <Navbar/>
      <main>
        <section className='landing'>
          <div className='container hero-background'>
            <img src="/hero-img.png" />
            <h1> Invest in everything </h1>
            <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <a href="" className='cta-btn'>Sign up for free</a>
          </div>
        </section>
        <section className='ecosystem'>
          <div className='container'>
            <div>
              <h2>Trust with Confidence</h2>
              <div>
                <h3>Customer-first always</h3>
                <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
              </div>
              <div>
                <h3>No spam or gimmicks</h3>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              </div>
              <div>
                <h3>The Zerodha universe</h3>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              </div>
              <div>
                <h3>Do better with money</h3>
                <p>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
              </div>
            </div>
            <div>
              <a>
                <img />
              </a>
              <p>
                <a>Explore our products</a>
                <a>Try Kite Demo</a>
              </p>
            </div>
          </div>
          <div>
            <a>
              <img src=""/>
            </a>
          </div>
        </section>
        <section className='pricing'>

        </section>
      </main>
    </>
  )
}

export default Home