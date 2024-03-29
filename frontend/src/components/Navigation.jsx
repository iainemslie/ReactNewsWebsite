import { useState } from 'react';
import { FaBars, FaSearch, FaChevronCircleDown } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import useScreenSize from '../hooks/useScreenSize';

const Navigation = ({ screenSize }) => {
  const [overlayMenu, setOverlayMenu] = useState(false);

  if (overlayMenu) {
    return (
      <>
        <div className='overlay-menu'>
          <div className='nav-bar overlay-nav-bar'>
            <FaX
              className='nav-burger'
              onClick={() => {
                setOverlayMenu(!overlayMenu);
                console.log('BURGER', overlayMenu);
                document.body.style.over = 'hidden';
              }}
            />
            <img className='nav-logo' src={logo} alt='FNN News' />
            <FaSearch
              className='nav-search'
              onClick={() => console.log('SEARCH')}
            />
          </div>
          <div className='overlay-links'>
            <a className='overlay-link' href='#'>
              US
            </a>
            <a className='overlay-link' href='#'>
              World
            </a>
            <a className='overlay-link' href='#'>
              Business
            </a>
            <a className='overlay-link' href='#'>
              Markets
            </a>
            <a className='overlay-link' href='#'>
              Tech
            </a>
            <a className='overlay-link' href='#'>
              Opinion
            </a>
            <a className='overlay-link' href='#'>
              Health
            </a>
            <a className='overlay-link' href='#'>
              Entertainment
            </a>
          </div>
          <div className='overlay-footer'>&copy; 2024 FNN</div>
        </div>
      </>
    );
  }

  if (screenSize.width <= 992) {
    // Small
    return (
      <div className='nav-bar'>
        <FaBars
          className='nav-burger'
          onClick={() => {
            setOverlayMenu(!overlayMenu);
            console.log('BURGER', overlayMenu);
          }}
        />
        <img className='nav-logo' src={logo} alt='FNN News' />
        <FaSearch
          className='nav-search'
          onClick={() => console.log('SEARCH')}
        />
      </div>
    );
  } else if (screenSize.width <= 1240) {
    // Extra Large
    return (
      <>
        <div className='nav-bar container'>
          <img className='nav-logo' src={logo} alt='FNN News' />

          <div className='nav-links'>
            <a className='nav-link' href='#'>
              US
            </a>
            <a className='nav-link' href='#'>
              World
            </a>
            <a className='nav-link' href='#'>
              Business
            </a>
            <a className='nav-link' href='#'>
              Markets
            </a>
            <a className='nav-link' href='#'>
              More <FaChevronCircleDown />
            </a>
          </div>

          <div className='nav-sign-up-in'>
            <a href='#' className='btn btn-dark'>
              Sign Up
            </a>
            <a href='#' className='btn btn-outline-dark'>
              Sign In
            </a>
          </div>
        </div>
      </>
    );
  } else {
    // Extra Extra Large
    return (
      <>
        <div className='nav-bar container'>
          <img className='nav-logo' src={logo} alt='FNN News' />

          <div className='nav-links'>
            <a className='nav-link' href='#'>
              US
            </a>
            <a className='nav-link' href='#'>
              World
            </a>
            <a className='nav-link' href='#'>
              Business
            </a>
            <a className='nav-link' href='#'>
              Markets
            </a>
            <a className='nav-link' href='#'>
              Tech
            </a>
            <a className='nav-link' href='#'>
              Opinion
            </a>
            <a className='nav-link' href='#'>
              Health
            </a>
            <a className='nav-link' href='#'>
              Entertainment
            </a>

            <FaSearch
              className='nav-search'
              onClick={() => console.log('SEARCH')}
            />
          </div>

          <div className='nav-sign-up-in'>
            <a href='#' className='btn btn-dark'>
              Sign Up
            </a>
            <a href='#' className='btn btn-outline-dark'>
              Sign In
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Navigation;
