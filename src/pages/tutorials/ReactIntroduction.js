import React from 'react';
import './style.css'

function ReactIntroduction() {
    return (
        <div className="tutorial-container">
          <h2>React - Introduction</h2>
    
          <p>
            React is an open-source JavaScript library used for building user interfaces, especially for single-page applications. It allows developers to build large web applications that can update and render efficiently in response to data changes.
          </p>
    
          <h3>Why React?</h3>
          <p>
            React provides a faster and simpler way to build interactive UIs. It allows developers to create reusable UI components, which helps in making the development process more efficient.
          </p>
    
          <h3>Features of React</h3>
          <ul>
            <li><strong>Virtual DOM</strong>: React uses a virtual DOM to improve performance by updating only parts of the actual DOM when the data changes.</li>
            <li><strong>Components</strong>: React is component-based, which means that the user interface is broken down into smaller, reusable components.</li>
            <li><strong>One-way Data Binding</strong>: React implements one-way data binding, where data flows from parent components to child components through props.</li>
            <li><strong>JSX (JavaScript XML)</strong>: JSX allows developers to write HTML inside JavaScript, which makes the code easier to understand and write.</li>
            <li><strong>Unidirectional Data Flow</strong>: React uses a one-way data flow, which helps in managing the state and makes the code more predictable.</li>
            <li><strong>Declarative</strong>: React allows developers to describe what the UI should look like at any point in time, and React automatically updates the UI when the state changes.</li>
          </ul>
    
          <h3>React Components</h3>
          <p>
            Components are the building blocks of React applications. They are small, reusable pieces of code that can be composed together to build a user interface. There are two types of components in React:
          </p>
          <ul>
            <li><strong>Functional Components</strong>: These are simple JavaScript functions that return JSX and do not have their own state (although they can use hooks for state management).</li>
            <li><strong>Class Components</strong>: These are ES6 classes that extend React.Component and can have their own state and lifecycle methods.</li>
          </ul>
    
          <h3>JSX - JavaScript XML</h3>
          <p>
            JSX is a syntax extension for JavaScript that looks similar to HTML. JSX is used to define the structure of the UI in React components. While writing JSX, it may appear as though you're writing HTML inside JavaScript, but it ultimately compiles down to regular JavaScript objects.
          </p>
          <p>
            Example of JSX:
          </p>
          <pre>
            <code>
              {`function MyComponent() {
      return (
        <div>
          <h1>Hello, React!</h1>
        </div>
      );
    }`}
            </code>
          </pre>
    
          <h3>Conclusion</h3>
          <p>
            React is a powerful and flexible library that allows developers to build modern, scalable, and performant web applications. By using components, JSX, and the virtual DOM, React helps in building dynamic UIs that are easy to manage and update. It is one of the most popular libraries for building modern web apps.
          </p>
        </div>
      );
}

export default ReactIntroduction;
