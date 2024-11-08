import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to React Tutorials</h1>
        <p className="home-description">
          Explore our tutorials to learn React step by step! We offer a range of tutorials 
          from beginner to advanced levels to help you master React and build amazing web applications.
        </p>
        <Link to="/tutorials/react-introduction" className="home-button">Get Started</Link>
      </div>
    );
  }
  
  export default Home;
