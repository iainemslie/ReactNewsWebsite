import { FaBars, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';
import useScreenSize from '../hooks/useScreenSize';

const Navigation = () => {
  const screenSize = useScreenSize();

  if (screenSize.width <= 576) {
    // Small
    return (
      <div className='nav-bar container'>
        <FaBars
          className='nav-burger'
          onClick={() => {
            console.log('BURGER');
          }}
        />
        <img className='nav-logo' src={logo} alt='FNN News' />
        <FaSearch
          className='nav-search'
          onClick={() => console.log('SEARCH')}
        />
      </div>
    );
  } else if (screenSize.width <= 768) {
    // Medium
    return <div className='nav-bar container'>Medium</div>;
  } else if (screenSize.width <= 992) {
    // Large
    return <div className='nav-bar container'>Large</div>;
  } else if (screenSize.width <= 1200) {
    // Extra Large
    return <div className='nav-bar container'>Extra Large</div>;
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
          </div>

          <div className='nav-sign-up-in'>
            <FaSearch
              className='nav-search'
              onClick={() => console.log('SEARCH')}
            />
            <a href='#' className='btn btn-dark'>
              Sign Up
            </a>
            <a href='#' className='btn btn-light'>
              Sign In
            </a>
          </div>
        </div>
      </>
    );
  }

  // return (
  //   <div className='nav-bar'>
  //     {screenSize.width < 576 ? <>Mobile</> : <>Large</>}

  //     {/*
  //     <FaBars className='nav-menu' />
  //     <img className='nav-logo' src={logo} alt='FNN News' /> */}

  // <div className='nav-links'>
  //   <a className='nav-link' href='#'>
  //     US
  //   </a>
  //   <a className='nav-link' href='#'>
  //     World
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Business
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Markets
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Tech
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Opinion
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Health
  //   </a>
  //   <a className='nav-link' href='#'>
  //     Entertainment
  //   </a>
  // </div>

  //   </div>
  // );
};

export default Navigation;
