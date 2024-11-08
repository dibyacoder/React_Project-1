import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TutorialList from './components/TutorialList';
import CreateReactApp from './pages/tutorials/CreateReactApp';
import ReactComponents from './pages/tutorials/ReactComponents';
import ReactFeatures from './pages/tutorials/ReactFeatures';
import ReactIntroduction from './pages/tutorials/ReactIntroduction';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<TutorialList />} />
        <Route path="/tutorials/create-react-app" element={<CreateReactApp />} />
        <Route path="/tutorials/react-components" element={<ReactComponents />} />
        <Route path="/tutorials/react-features" element={<ReactFeatures />} />
        <Route path="/tutorials/react-introduction" element={<ReactIntroduction />} />
      </Routes>
    </Router>
  );
}

export default App;
