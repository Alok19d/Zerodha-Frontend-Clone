import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSquareFacebook, faInstagram, faLinkedinIn, faYoutube, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='main-footer'>
          <div>
            <div className='footer-logo'>
              <img src="./logo.svg"/>
            </div>
            <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>
            <div className='social'>
              <span>
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
              <span>
                <FontAwesomeIcon icon={faSquareFacebook} />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </div>
            <hr className='footer-hr'/>
            <div className='social'>
              <span>
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTelegram} />
              </span>
            </div>
          </div>
          <div className='company'>
            <h3>Company</h3>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Pricing</a>
            <a href="">Referral programme</a>
            <a href="">Careers</a>
            <a href="">Zerodha.tech</a>
            <a href="">Open source</a>
            <a href="">Press & media</a>
            <a href="">Zerodha Cares (CSR)</a>
          </div>
          <div className='support'>
            <h3>Support</h3>
            <a href=''>Contact us</a>
            <a href=''>Support portal</a>
            <a href=''>Z-Connect blog</a>
            <a href=''>List of charges</a>
            <a href=''>Downloads & resources</a>
            <a href=''>Videos</a>
            <a href=''>Market overview</a>
            <a href=''>How to file a complaint?</a>
            <a href=''>Status of your complaints</a>
          </div>
          <div className='account'>
            <h3>Account</h3>
            <a href=''>Open an account</a>
            <a href=''>Fund transfer</a>
          </div>
        </div>
        <div className='smallprint'>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''>complaints@zerodha.com</a>, for DP related to <a href=''>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on <a href=''>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p><a href=''>Smart Online Dispute Resolution</a> | <a href=''>Grievances Redressal Mechanism</a></p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=''>create a ticket here</a>.</p>
        </div>
        <div className='footer-graveyard-links'>
          <a href="">NSE</a>
          <a href="">BSE</a>
          <a href="">MCX</a>
          <a href="">Terms & conditions</a>
          <a href="">Policies & procedures</a>
          <a href="">Privacy policy</a>
          <a href="">Disclosure</a>
          <a href="">For inverstor's attention</a>
          <a href="">Inverstor charter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer