import React from 'react';
import { Link } from 'react-router-dom';
import './TutorialList.css';

function TutorialList() {
  const tutorials = [
    { id: 1, title: 'React Introduction', description: 'Learn the fundamentals of React.js.', link: '/tutorials/react-introduction'  },
    { id: 2, title: 'create react app', description: 'Explore Create React Tool.', link: '/tutorials/create-react-app' },
    { id: 3, title: 'React Feature', description: 'Important Features of React', link: '/tutorials/react-features'  },
    { id: 4, title: 'React Components', description: 'Different components in React.', link: '/tutorials/react-components'  },
    // Add more tutorials here
  ];

  return (
    <div className="tutorial-list-container">
      <h1 className="tutorial-list-title">React Tutorials</h1>
      <div className="tutorial-list">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="tutorial-card">
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <Link to={tutorial.link} className="home-button">Start Tutorial</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialList;
