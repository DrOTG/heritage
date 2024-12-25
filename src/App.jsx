import { useContext, useEffect, useState, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { ToastContext, UserContext } from './context';
import { Toast } from 'primereact/toast';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from './assets/logo.png'; // Default white logo
import logoBlack from './assets/logo_2.png'; // Black logo
import './index.css'; // Use the existing CSS file

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(logoWhite);
  const location = useLocation();
  const navigate = useNavigate();

  const userData = useContext(UserContext);
  const toastRef = useContext(ToastContext);

  function goToProfile(e) {
    if(userData.user === null) {
      navigate("/login")
      if(userData.userError) {
        toastRef.current.show({severity:"error",summary:"User Error",detail:userData.userError})
      }
    } else {
      navigate("/profile")
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY > 50) {
        setIsScrolled(true);
        setLogo(logoBlack);
      } else if (location.pathname === '/') {
        setIsScrolled(false);
        setLogo(logoWhite);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
      setLogo(logoBlack);
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <>
      <Menubar
        model={menuItems}
        start={<img src={logo} alt="Logo" className="navbar-logo" onClick={() => navigate('/')} />}
        className={`custom-menubar ${isScrolled ? 'scrolled' : ''}`}
        end={<button className={`pi pi-user`} style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={goToProfile}></button>}
      />
      <div className="main-content">
        {location.pathname === '/' && (
          <>
            <section id="home" style={{ padding: '100px 20px' }}>
              <h1>Home Section</h1>
              <p>Welcome to our website!</p>
            </section>
            <section id="about" style={{ padding: '100px 20px' }}>
              <h1>About Us Section</h1>
              <p>Learn more about us here!</p>
            </section>
            <section id="contact" style={{ padding: '100px 20px' }}>
              <h1>Contact Us Section</h1>
              <p>Get in touch with us!</p>
            </section>
          </>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default App;
