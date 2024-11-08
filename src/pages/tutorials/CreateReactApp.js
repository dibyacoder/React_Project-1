import React from 'react';
import './style.css'

function CreateReactApp() {
    return (
        <div className="tutorial-container">
          <h2>How to Create a React App</h2>
          <p>Follow these steps to create your first React app:</p>
          <h3>Step 1: Install Node.js</h3>
          <p>First, make sure you have Node.js installed. You can download it from the official website.</p>
          
          <h3>Step 2: Create a React App</h3>
          <p>To create a new React app, use the following command:</p>
          <pre><code>npx create-react-app my-app</code></pre>
    
          <h3>Step 3: Start the App</h3>
          <p>Navigate into your app directory and start the development server:</p>
          <pre><code>cd my-app && npm start</code></pre>
    
          <h3>Step 4: Open in Browser</h3>
          <p>Visit <strong>http:/localhost:3000</strong> in your browser to view your app.</p>
        </div>
      );
}

export default CreateReactApp;

