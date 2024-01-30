import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa6';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt='' />
      <h4>Fake News Network</h4>
      <div className='container'>
        <div className='footer-content'>
          <a className='footer-link' href='#'>
            US
          </a>
          <a className='footer-link' href='#'>
            World
          </a>
          <a className='footer-link' href='#'>
            Business
          </a>
          <a className='footer-link' href='#'>
            Markets
          </a>
          <a className='footer-link' href='#'>
            Tech
          </a>
          <a className='footer-link' href='#'>
            Opinion
          </a>
          <a className='footer-link' href='#'>
            Health
          </a>
          <a className='footer-link' href='#'>
            Entertainment
          </a>
        </div>
      </div>
      <div className='footer-socials'>
        <FaFacebook className='footer-social' />
        <FaTwitter className='footer-social' />
        <FaYoutube className='footer-social' />
        <FaInstagram className='footer-social' />
      </div>
      <div className='footer-copyright'>&copy; FNN 2024</div>
    </div>
  );
};

export default Footer;
