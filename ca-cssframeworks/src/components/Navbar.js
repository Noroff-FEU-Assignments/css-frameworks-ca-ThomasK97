import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobMenu = () => setClick(false);
  
    const buttonVisible = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      buttonVisible();
    }, []);
  
    window.addEventListener('resize', buttonVisible);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobMenu}>
              The YAY Company
              
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/news'
                  className='nav-links'
                  onClick={closeMobMenu}
                >
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobMenu}
                >
                  Contact
                </Link>
              </li>
  
              <li>
                <Link
                  to='/search'
                  className='nav-links-mobile'
                  onClick={closeMobMenu}
                >
                  Search
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Search</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
