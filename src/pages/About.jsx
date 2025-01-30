import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MemberCard from '../components/MemberCard'

const About = () => {
  const members = [
    {
      name: "Nikhil Kamath",
      img: "https://zerodha.com/static/images/Nikhil.jpg",
      position: "Co-founder & CFO",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." 
    },
    {
      name: "Dr. Kailash Nadh",
      img: "https://zerodha.com/static/images/Kailash.jpg",
      position: "CTO",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day." 
    },
    {
      name: "Venu Madhav",
      img: "https://zerodha.com/static/images/Venu.jpg",
      position: "COO",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha." 
    },
    {
      name: "Hanan Delvi",
      img: "https://zerodha.com/static/images/Hanan.jpg",
      position: "CCO",
      bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time." 
    },
    {
      name: "Seema Patil",
      img: "https://zerodha.com/static/images/Seema.jpg",
      position: "Director",
      bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast." 
    },
    {
      name: "Karthik Rangappa",
      img: "https://zerodha.com/static/images/karthik.jpg",
      position: "Chief of Education",
      bio: "Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography." 
    },
    {
      name: "Austin Prakesh",
      img: "https://zerodha.com/static/images/Austin.jpg",
      position: "Director Strategy",
      bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches." 
    }

  ];


  return (
    <>
    <Navbar />
    <main className='about'>
      <section className='about-header container'>
        <div className='container'>
          <h2> We pioneered the discount broking model in India. <br /> Now, we are breaking ground with our technology.
          </h2>
        </div>
      </section>
      <section className='about-history'>
        <div className='mini-container'>
          <div className='history-content flex justify-between'>
            <div className='basis-[48%]'>
              <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
              <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
              <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='basis-[48%]'>
              <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
              <p><a>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
              <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a>blog</a> or see what the media is <a>saying about us.</a></p>
            </div>
          </div>
        </div>
      </section>
      <section className='about-people'>
        <div className='mini-container text-center'>
          <h2>People</h2>
          <div className='ceo-container flex justify-between text-left'>
            <div className='basis-[39.3%] text-center'>
              <img className='founder-image' src="https://zerodha.com/static/images/nithin-kamath.jpg"/>
              <h5>Nithin Kamath</h5>
              <p className='text-[#666666] my-[14.5px] text-sm'>Founder, CEO</p>
            </div>
            <div className='ceo-about basis-[56.6%]'>
              <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <a>Homepage</a> / <a>TradingQnA</a> / <a>Twitter</a></p>
            </div>
          </div>
        </div>
        <div className='container team-members'>
            {
              members.map((member, idx)=>
                <MemberCard key={idx} member={member} />
              )
            }
          </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default About