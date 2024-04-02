import React from 'react';
import './Home.scss'; 
import logo from '../assets/icon.svg'
import koala from '../assets/koala.jpeg'
import instagram  from '../assets/icons/instagram.svg'
import github from '../assets/icons/square-github.svg'
import linkedin from '../assets/icons/linkedin-in.svg'



const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="menu">
        <img src={logo} alt="Logo"/>
        <div className="menu-item">Home</div>
        <div className="menu-item">Blog</div>
        <div className="menu-item">About Us</div>
        <button className="login-button">Login</button>
      </div>
      <div className="content">
        <div className="logo">
          <p className="focus">Focus</p>
          <p className="text"> is powerful and cool, join the revolution</p>
        </div>
        <div className="panda-container">
          <img src={koala} alt="Panda" className="panda" />
        </div>
    
      </div>
      <div className="footer">
        <div className="social-links">
          <a href="#"><img src={linkedin} alt="Facebook" /></a>
          <a href="#"><img src={github} /></a>
          <a href="#"><img src={ instagram } alt="Instagram" /></a>
        </div>
        <p>&copy; 2024 FocusFrenzy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
