import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <FaBars className='nav-menu' />
      <img className='nav-logo' src={logo} alt='FNN News' />
      <a className='nav-link' href='#'>
        US
      </a>
      <a className='nav-link' href='#'>
        World
      </a>
      <a className='nav-link' href='#'>
        Politics
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
  );
};

export default Navigation;
