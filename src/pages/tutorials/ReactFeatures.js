import React from 'react';
import './style.css'

function ReactFeatures() {
    return (
        <div className="tutorial-container">
          <h2>React - Features</h2>
    
          <p>
            React is a powerful and flexible JavaScript library used for building user interfaces. It has several key features that make it an attractive choice for developers. Below are the main features of React:
          </p>
    
          <h3>1. JSX (JavaScript XML)</h3>
          <p>
            JSX is a syntax extension for JavaScript. It looks similar to HTML but has the full power of JavaScript. JSX is used to describe what the UI should look like. React compiles JSX into JavaScript, which can then be executed in the browser.
          </p>
          <pre>
            <code>
              {`function App() {
      return <h1>Hello, React!</h1>;
    }`}
            </code>
          </pre>
    
          <h3>2. Components</h3>
          <p>
            React is based on components. Components are small, reusable pieces of code that can be composed to create complex UIs. There are two types of components in React:
          </p>
          <ul>
            <li><strong>Functional Components</strong>: These are simpler and use hooks for state and lifecycle methods.</li>
            <li><strong>Class Components</strong>: These are more traditional and have built-in lifecycle methods and local state.</li>
          </ul>
    
          <h3>3. Virtual DOM</h3>
          <p>
            The Virtual DOM is a concept used in React to improve performance. Instead of updating the actual DOM directly, React updates the Virtual DOM and then compares it with the previous version. After calculating the minimal changes, React updates only the changed elements in the actual DOM.
          </p>
          <p>
            This makes React applications faster and more efficient by minimizing the number of updates to the real DOM.
          </p>
    
          <h3>4. One-Way Data Binding</h3>
          <p>
            React uses one-way data binding, which means data flows in one direction, from parent to child components. This ensures that the data remains predictable and the application state is easier to manage.
          </p>
          <p>
            In React, you pass data from a parent component to a child component via <strong>props</strong>, and the child cannot directly modify the parent's state.
          </p>
    
          <h3>5. Performance</h3>
          <p>
            React is known for its high performance due to the use of the Virtual DOM. When the state of a component changes, React updates only the necessary components and re-renders them, which minimizes performance issues.
          </p>
          <p>
            React also optimizes updates through techniques like shouldComponentUpdate and React.memo, which help prevent unnecessary re-renders.
          </p>
    
          <h3>6. React Hooks</h3>
          <p>
            React introduced Hooks in version 16.8 to allow functional components to manage state and side effects. Hooks make it easier to share logic between components, use lifecycle methods, and manage state in functional components.
          </p>
          <ul>
            <li><strong>useState</strong>: Allows you to add state to functional components.</li>
            <li><strong>useEffect</strong>: Allows you to perform side effects like fetching data or subscribing to events in functional components.</li>
            <li><strong>useContext</strong>: Provides a way to pass data through the component tree without using props.</li>
          </ul>
    
          <h3>7. Declarative Nature</h3>
          <p>
            React is declarative, meaning that you describe what the UI should look like based on the current state. When the state changes, React automatically updates the UI to reflect those changes.
          </p>
          <p>
            This makes React code more predictable, easier to debug, and easier to maintain.
          </p>
    
          <h3>8. Reusable Components</h3>
          <p>
            One of the best features of React is that components are reusable. Once a component is created, you can reuse it anywhere in your app. This helps in reducing the amount of code you need to write and improves the maintainability of your application.
          </p>
          <p>
            For example, you can create a Button component and use it in multiple places with different props.
          </p>
    
          <h3>Conclusion</h3>
          <p>
            React’s features, including JSX, components, Virtual DOM, one-way data binding, and React hooks, make it one of the most powerful and popular JavaScript libraries for building modern web applications. Its declarative approach and focus on performance allow developers to create fast, scalable, and maintainable applications with ease.
          </p>
        </div>
      );
}

export default ReactFeatures;
