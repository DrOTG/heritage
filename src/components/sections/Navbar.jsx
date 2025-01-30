import { useState, useEffect, useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContext, UserContext } from '../../context';
import logoWhite from '../../assets/logo.png';
import logoBlack from '../../assets/logo_2.png';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(logoWhite);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userError } = useContext(UserContext);
  const toastRef = useContext(ToastContext);

  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldScrolled = window.scrollY > 100;
      setIsScrolled(shouldScrolled);
      setLogo(shouldScrolled ? logoBlack : logoWhite);
    };

    if (location.pathname === '/') {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
      setLogo(logoBlack);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'About Us', section: 'about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact Us', section: 'contact' },
  ];

  return (
    <Menubar
      start={
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          onClick={() => navigate('/')}
        />
      }
      className={`custom-menubar ${isScrolled ? 'scrolled' : ''}`}
      model={menuItems.map((item) => ({
        label: item.label,
        template: () => (
          <a
            className={`menu-item ${
              location.hash === `#${item.section}` ? 'active' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              item.path
                ? navigate(item.path)
                : handleNavigation('/', item.section);
            }}
            href={item.path || `#${item.section}`}
          >
            {item.label}
          </a>
        ),
      }))}
      end={
        user ? (
          <Avatar
            icon="pi pi-user"
            shape="circle"
            className={isScrolled ? 'scrolled-avatar' : ''}
            onClick={() => navigate('/profile')}
          />
        ) : (
          <Button
            label="Login/Sign up"
            className={isScrolled ? 'scrolled-button' : ''}
            onClick={() => navigate('/login')}
          />
        )
      }
    />
  );
}