import React,{useState} from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="/" >
            <img className='logo-img' src="/logo.svg" alt="zerodha-logo"/>
          </a>
        </div>
        <div className='navbar-links'>
          <a href="" className='nav-link'>Signup</a>
          <a href="" className='nav-link'>About</a>
          <a href="" className='nav-link'>Products</a>
          <a href="" className='nav-link'>Pricing</a>
          <a href="" className='nav-link'>Support</a>
       
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
                  <a>Signup</a>
                  <a>About</a>
                  <a>Products</a>
                  <a>Pricing</a>
                  <a>Support</a>
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