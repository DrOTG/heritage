import { Outlet } from 'react-router-dom';
import Navbar from './components/sections/Navbar'; // Import the Navbar
import './index.css';

function App() {
  return (
    <div className="site-wrapper">
      <div className="site-container">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
