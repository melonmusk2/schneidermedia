import Logo from '../assets/logo_1.webp'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-neutral-300/80 py-12 bg-neutral-300/80 text-black font-semibold text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link to='hero' activeClass='active' smooth={true} spy={true} offset={-200}>
          <img to='hero' src={Logo} className='max-h-20'/>
          </Link>
          <div className="flex gap-6">
            <NavLink to="/Impressum">
            <a  className="hover:text-white text-lg font-secondary transition-colors">Impressum</a>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;