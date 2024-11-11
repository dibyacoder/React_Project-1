import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';


function Home() {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to React Tutorials</h1>
        <p className="home-description">
          Explore our tutorials to learn React step by step! We offer a range of tutorials 
          from beginner to advanced levels to help you master React and build amazing web applications.
        </p>
        <Link to="/tutorials/react-introduction" className="home-button">Get Started</Link>

        <footer className="footer">
        <p>&copy; 2024 Dibya Ranjan Sahu. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="/services" target="_blank" rel="noopener noreferrer">Services</a>
          <a href="/Contact" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://leetcode.com/u/dibu_001/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://www.linkedin.com/in/dibya-ranjan-sahu-203906278" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        </footer>

      </div>
    );
  }
  
  export default Home;
