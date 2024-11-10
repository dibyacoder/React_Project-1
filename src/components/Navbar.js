import './Navbar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track sidebar visibility
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };
  
    return (
      <>
        {/* Sidebar */}
        <nav className={`navbar ${isSidebarOpen ? "open" : "closed"}`}>
          <div className="navbar-brand">
            <h1>React Tutorial</h1>
          </div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/tutorials/react-introduction">React Introduction</Link>
            <Link to="/tutorials/react-installation">React Installation</Link>
            <Link to="/tutorials/create-react-app">Create React App</Link>
            <Link to="/tutorials/react-features">React Features</Link>
            <Link to="/tutorials/react-components">React Components</Link>
            <Link to="/tutorials/react-state">React State</Link>
            <Link to="/tutorials/react-component-API">React Component API</Link>

          </div>
        </nav>
  
        {/* Toggle Button */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? "Hide" : "Show"} Sidebar
        </button>
      </>
    );
  };

  export default Navbar;
