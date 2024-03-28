import React from 'react';
import './Home.scss'; 

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">Blog</div>
        <div className="menu-item">About Us</div>
        <button className="login-button">Login</button>
      </div>
      <div className="content">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
          <p>Focus is powerful and cool, join the revolution</p>
        </div>
        <div className="panda-container">
          <img src="/path/to/panda.png" alt="Panda" className="panda" />
          <div className="fireworks"></div>
        </div>
      </div>
      <div className="footer">
        <div className="social-links">
          <a href="#"><img src="/path/to/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/path/to/twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="/path/to/instagram.png" alt="Instagram" /></a>
        </div>
        <p>&copy; 2024 FocusFrenzy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
