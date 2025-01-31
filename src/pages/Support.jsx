import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faUser, faChartSimple, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faLifeRing } from '@fortawesome/free-regular-svg-icons'

const Support = () => {
  return (
    <>
      <Navbar />
      <div className='faq-section'>
        <div className='faq-head-section'>
          <div className='container'>
            <div className='flex justify-between items-center py-[10px]'>
            <a className='support-portal-logo basis-[13.3%]'>
                Support Portal
              </a>
              <a className='track-tickets'>
                Track Tickets
              </a>
            </div>
            <div className='flex justify-between support-container'>
              <div className='basis-[56.6%]'>
                <div className='support-subheading'>
                  Search for an answer or browse help topics to create a ticket
                </div>
                <div className='search-inp-grp'>
                  <input className='search-text' type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
                <div className='super-links'>
                  <p><a>Track account opening</a></p>
                  <p><a>Track segment activation</a></p>
                  <p><a>Intraday margins</a></p>
                  <p><a>Kite user manual</a></p>
                </div>
              </div>
              <div className='basis-[39.3%] featured'>
                <div className='featured-header'>Featured</div>
                <ol>
                  <li><a>Special live trading session on Saturday, February 1, 2025</a></li>
                  <li><a>Special live trading session on Saturday, February 1, 2025</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className='faq-content-section'>
          <div className='container mt-[20px]'>
            <h2>To create a ticket, select a relevant topic</h2>
            <div className='flex justify-between flex-wrap card-block-container'>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Account Opening
                  </a>
                </h3>
                <p><a>Getting started</a></p>
                <p><a>Online</a></p>
                <p><a>Offline</a></p>
                <p><a>Charges</a></p>
                <p><a>Company, Partnership and HUF</a></p>
                <p><a>Non Resident Indian (NRI)</a></p>
              </div>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faUser} />
                    Your Zerodha Account
                  </a>
                </h3>
                <p><a>Login credentials</a></p>
                <p><a>Your Profile</a></p>
                <p><a>Account modification and segment addition</a></p>
                <p><a>CMR & DP ID</a></p>
                <p><a>Nomination</a></p>
                <p><a>Transfer and conversion of shares</a></p>
              </div>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faChartSimple} />
                    Trading and Markets
                  </a>
                </h3>
                <p><a>Trading FAQs</a></p>
                <p><a>Kite</a></p>
                <p><a>Margins</a></p>
                <p><a>Product and order types</a></p>
                <p><a>Corporate actions</a></p>
                <p><a>Kite Features</a></p>
              </div>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faCreditCard} />
                    Funds
                  </a>
                </h3>
                <p><a>Fund withdrawal</a></p>
                <p><a>Adding funds</a></p>
                <p><a>Adding bank accounts</a></p>
                <p><a>eMandates</a></p>
              </div>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faLifeRing} />
                    Console
                  </a>
                </h3>
                <p><a>IPO</a></p>
                <p><a>Portfolio</a></p>
                <p><a>Funds statement</a></p>
                <p><a>Profile</a></p>
                <p><a>Reports</a></p>
                <p><a>Referral program</a></p>
              </div>
              <div className='basis-[30.6%] card-block'>
                <h3>
                  <a>
                    <FontAwesomeIcon icon={faCircle} />
                    Coin
                  </a>
                </h3>
                <p><a>Understanding mutual funds and Coin</a></p>
                <p><a>Coin app</a></p>
                <p><a>Coin web</a></p>
                <p><a>Transactions and reports</a></p>
                <p><a>National Pension Scheme (NPS)</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Support