import Logo from '../assets/logo_2.svg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-neutral-800/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-left gap-2">
             <Link href='#'  to='hero' activeClass='active' smooth={true} spy={true} offset={-200}>
            <img className='Logosz' alt='Logo' src={Logo} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-12 text-md font-medium">
            <Link href='#' to='leistungen' activeClass='active' smooth={true} spy={true} offset={-200}>
            <a className="hover:text-cyan-400 transition-colors">Leistungen</a>
            </Link>
             {/* <Link href='#' to='Referenzen' activeClass='active' smooth={true} spy={true} offset={-200}>
            <a  className="hover:text-cyan-400 transition-colors">Referenzen</a>
            </Link>*/}
             <Link href='#' to='uber' activeClass='active' smooth={true} spy={true} offset={-200}>
            <a className="hover:text-cyan-400 transition-colors">Über mich</a>
            </Link>
          </nav>
          <NavLink to="/Kontakt">
          <a className="bg-black text-md hover:bg-white hover:text-black text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02]" >
            Kontakt
          </a>
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;