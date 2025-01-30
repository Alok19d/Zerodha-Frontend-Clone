import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  let isActive = menuOpen ? "open":"";

  function handleMenuOpen(){
    if(menuOpen == true){
      setMenuOpen(false);
    }
    else{
      setMenuOpen(true)
    }
  }
  
  return (
    <nav className="navbar">
      <div className='container nav-container'>
        <div>
          <Link to="/" >
            <img className='logo-img' src="/logo.svg" alt="zerodha-logo"/>
          </Link>
        </div>
        <div className='navbar-links'>
          <Link 
            to="/open-account" 
            className={location.pathname === "/open-account"? "active nav-link": 'nav-link'}>
            Signup
          </Link>
          <Link 
            to='/about' 
            className={location.pathname === "/about"? "active nav-link": 'nav-link'}>
            About
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === "/products"? "active nav-link": 'nav-link'}>
            Products
          </Link>
          <Link 
            to="" 
            className='nav-link'>
            Pricing
          </Link>
          <Link 
            to="/support" 
            className={location.pathname === "/support"? "active nav-link": 'nav-link'}>
            Support
          </Link>
       
          <div id="navbar-menu">
            <div className='menu-btn-container' onClick={handleMenuOpen}>
              <div id="menu-btn" className={isActive}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {
              menuOpen && 
              <div id="menu">
                <div className='menu-links'>
                  <Link to="/open-account">Signup</Link>
                  <Link to="/about">About</Link>
                  <Link to="/products">Products</Link>
                  <a>Pricing</a>
                  <Link to="/support">Support</Link>
                </div>
                <div className='products-list'>
                  <div className='product'>
                    <a>
                      <img src="./kite-logo.svg"/>
                      <strong>Kite</strong>
                      <span>Trading platform</span>
                    </a>
                  </div>
                  <div className='product'>
                    <a>
                      <img src="./console.svg"/>
                      <strong>Console</strong>
                      <span>Backoffice</span>
                    </a>
                  </div>
                  <div className='product'>
                    <a>
                      <img src="./kite-connect.svg"/>
                      <strong>Kite Connect</strong>
                      <span>Trading APIs</span>
                    </a>
                  </div>
                  <div className='product'>
                    <a>
                      <img src="./coin.svg"/>
                      <strong>Coin</strong>
                      <span>Mutual funds</span>
                    </a>
                  </div>
                </div>
                <div className='menu-footer'>
                  <div className='menu-footer-left'>
                    <div className='utils'>
                      <p><strong>Utilities</strong></p>
                      <a>Brokerage calculator</a> 
                      <a>Margin calculator</a>
                      <a>Holiday Calender</a>
                      <a>Markets</a>
                    </div>
                    <div className='updates'>
                      <p><strong>Updates</strong></p>
                      <a>Z-Connect blog</a>
                      <a>Pulse News</a>
                      <a>Circulars/ Bulletin</a>
                      <a>IPOs</a>
                    </div>
                  </div>
                  <div className='menu-footer-right'>
                    <p><strong>Education</strong></p>
                    <div className="education">
                      <a>
                        <img src="./varsity.png"/>
                        <span>Varsity</span>
                      </a>
                      <a>
                        <img src="./tqna.png"/>
                        <span>Trading Q&A</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar