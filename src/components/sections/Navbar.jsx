import { useState, useEffect, useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContext, UserContext } from '../../context';

import logoWhite from '../../assets/logo.png'; // Default white logo
import logoBlack from '../../assets/logo_2.png'; // Black logo
import { Avatar } from 'primereact/avatar';
import './Navbar.css'; // CSS for Navbar
import { Button } from 'primereact/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(logoWhite);
  const location = useLocation();
  const navigate = useNavigate();

  const userData = useContext(UserContext);
  const toastRef = useContext(ToastContext);

  const goToProfile = () => {
    if (!userData.user) {
      navigate('/login');
      if (userData.userError) {
        toastRef.current.show({
          severity: 'error',
          summary: 'User Error',
          detail: userData.userError,
        });
      }
    } else {
      navigate('/profile');
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY > 690) {
        setIsScrolled(true);
        setLogo(logoBlack);
      } else if (location.pathname === '/') {
        setIsScrolled(false);
        setLogo(logoWhite);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
      setLogo(logoBlack);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const menuItems = [
    {
      label: 'Home',
      command: () => {
        if (location.pathname === '/') {
          scrollToSection('home');
        } else {
          navigate('/');
          setTimeout(() => scrollToSection('home'), 100);
        }
      },
    },
    {
      label: 'About Us',
      command: () => {
        if (location.pathname === '/') {
          scrollToSection('about');
        } else {
          navigate('/');
          setTimeout(() => scrollToSection('about'), 100);
        }
      },
    },
    {
      label: 'Pricing',
      command: () => navigate('/pricing'),
    },
    {
      label: 'Contact Us',
      command: () => {
        if (location.pathname === '/') {
          scrollToSection('contact');
        } else {
          navigate('/');
          setTimeout(() => scrollToSection('contact'), 100);
        }
      },
    },
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
        ...item,
        template: (menuItem) => (
          <a
            className="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuItem.command();
            }}
            href="#"
          >
            {menuItem.label}
          </a>
        ),
      }))}
      end={(userData.user == null) ? (
        <Button label='Login/Sign up' onClick={(e)=>{
          navigate("/login");
        }} />
      ) : (<Avatar icon="pi pi-user" shape='circle' />)}
    />
  );
}
