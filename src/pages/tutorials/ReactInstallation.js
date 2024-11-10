// src/components/tutorials/ReactInstallation.js
import React from "react";
import "./style.css";

const ReactInstallation = () => {
  return (
    <div className="tutorial-container">
      <h2>React Installation</h2>
      <p>
        To start using React, you can install it on your local machine by using
        either the <strong>Create React App</strong> tool or adding React as a
        dependency in an existing project.
      </p>

      <h3>1. Install Node.js</h3>
      <p>
        React requires <strong>Node.js</strong> and <strong>npm</strong> (Node
        Package Manager) to be installed on your system. You can download and
        install Node.js from the official website:
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
          https://nodejs.org
        </a>
      </p>
      <p>
        To confirm that Node.js and npm are installed, run the following
        commands in your terminal:
      </p>

      <pre>
        {`node -v
npm -v`}
      </pre>

      <h3>2. Using Create React App</h3>
      <p>
        <strong>Create React App</strong> is an officially supported way to
        create single-page React applications. It offers a modern build setup
        with no configuration needed.
      </p>

      <p>To create a new React application, run the following command:</p>

      <pre>{`npx create-react-app my-app`}</pre>

      <p>
        This will create a new directory called <code>my-app</code> with all
        necessary files and dependencies. Once installation is complete, you can
        navigate into your app folder and start the development server:
      </p>

      <pre>
        {`cd my-app
npm start`}
      </pre>

      <h3>3. Adding React to an Existing Project</h3>
      <p>
        If you want to add React to an existing project, you can do so by
        installing <strong>react</strong> and <strong>react-dom</strong> as
        dependencies.
      </p>

      <p>Run the following command in your project directory:</p>

      <pre>{`npm install react react-dom`}</pre>

      <h3>4. Running the React Application</h3>
      <p>
        To start the React development server, navigate to your project
        directory and run:
      </p>

      <pre>{`npm start`}</pre>

      <p>
        This will launch the app on <code>http://localhost:3000</code> in your
        default web browser.
      </p>

      <h3>Troubleshooting Installation</h3>
      <p>
        If you encounter issues during installation, ensure that you are using
        the latest versions of Node.js and npm. You can also check the React
        documentation for more help and guidance.
      </p>
    </div>
  );
};

export default ReactInstallation;
