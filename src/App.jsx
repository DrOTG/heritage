import { useContext, useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { ToastContext, UserContext } from './context';

// Assets
import logoWhite from './assets/logo.png'; // Default white logo
import logoBlack from './assets/logo_2.png'; // Black logo

// Sections of Home page
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SupportedUni from './components/sections/Supported_uni';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

// Main CSS file
import './index.css';
import { Avatar } from 'primereact/avatar';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(logoWhite);
  const [hoveredItem, setHoveredItem] = useState(null);
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
      className: location.pathname === '/' ? 'active' : '',
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
      className: location.pathname === '/about' ? 'active' : '',
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
      className: location.pathname === '/pricing' ? 'active' : '',
      command: () => navigate('/pricing'),
    },
    {
      label: 'Contact Us',
      className: location.pathname === '/contact' ? 'active' : '',
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
      <div className="css-ywysxn">
        <div className="css-nq39mh">
          <div className="css-zf0iqh">
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
              model={menuItems.map((item, index) => ({
                ...item,
                template: (menuItem) => (
                  <a
                    className={`p-menuitem-link menu-item ${menuItem.className || ''}`}
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
              end={(
                <>
                {userData.user && (
                  <Avatar image={userData.user.photoUrl} />
                )}
                </>
              )}
            />

            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
