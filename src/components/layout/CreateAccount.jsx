import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const CreateAccount = ({children}) => {
  return (
    <>
      <Navbar />
      <div className='create-account'>
        <section className='account-open-section'>
          <div className='register-container'>
            <div className='rc-left'>
              <img src="./signup.png"/>
            </div>
            <div className='rc-right'>
              {children}
            </div>
          </div>
          <div className='register-info'>
            <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to <a>know more</a>.
            </p>
            <p>
            By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.
            </p>
            <p> 
            If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a>offline forms</a>. For help, <a>click here</a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default CreateAccount