import React from 'react';
import './style.css';

function ReactComponents() {
  return (
    <div className="tutorial-container">
      <h2>React - Components</h2>

      <p>
        In React, components are the building blocks of the user interface. A React component is a JavaScript function or class that optionally accepts input (in the form of "props") and returns a React element that describes how the UI should appear.
      </p>

      <h3>Types of Components</h3>
      <p>
        React has two types of components: Functional Components and Class Components.
      </p>

      <h4>1. Functional Components</h4>
      <p>
        Functional components are simple JavaScript functions that take props as input and return JSX as output. They are the most common type of component used in React today.
      </p>
      <pre>
        <code>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>
      <p>
        Functional components are simple, easy to read, and can be used with React hooks for state and lifecycle management.
      </p>

      <h4>2. Class Components</h4>
      <p>
        Class components are ES6 classes that extend React.Component. They can hold state and have access to lifecycle methods, which makes them more powerful but also more complex.
      </p>
      <pre>
        <code>
          {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </code>
      </pre>
      <p>
        Class components are useful when you need more control over the component's behavior, such as managing local state and responding to lifecycle events.
      </p>

      <h3>Creating Components</h3>
      <p>
        Components can be created using either a function or a class. Here's how you can create both types:
      </p>
      <ul>
        <li><strong>Functional Component</strong>: A function that returns JSX.</li>
        <li><strong>Class Component</strong>: A class that extends <code>React.Component</code> and includes a render method to return JSX.</li>
      </ul>

      <h3>Component Lifecycle (Class Components)</h3>
      <p>
        Class components in React have lifecycle methods, which allow developers to hook into different stages of the component's lifecycle:
      </p>
      <ul>
        <li><strong>componentDidMount()</strong>: Called once the component is mounted (rendered) in the DOM.</li>
        <li><strong>componentDidUpdate()</strong>: Called when the component updates (re-renders) due to state or props changes.</li>
        <li><strong>componentWillUnmount()</strong>: Called just before the component is removed from the DOM.</li>
      </ul>
      <p>
        React also provides hooks such as <code>useEffect</code> for managing side effects in functional components.
      </p>

      <h3>Props in React</h3>
      <p>
        "Props" (short for properties) are inputs passed into a component from its parent. Props are used to pass data to child components. They are immutable, meaning a child component cannot change the props it receives.
      </p>
      <pre>
        <code>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>
      <p>
        Example of passing props to a component:
      </p>
      <pre>
        <code>
          {`function App() {
  return <Welcome name="John" />;
}`}
        </code>
      </pre>

      <h3>State in React</h3>
      <p>
        "State" is a set of data that determines the behavior and rendering of a component. Unlike props, state is mutable, meaning it can be changed within a component. State allows components to be interactive and dynamic.
      </p>
      <h4>Using State in Class Components</h4>
      <pre>
        <code>
          {`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`}
        </code>
      </pre>

      <h4>Using State in Functional Components (with hooks)</h4>
      <pre>
        <code>
          {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
        </code>
      </pre>

      <h3>Component Communication</h3>
      <p>
        Components can communicate with each other by passing data through <strong>props</strong> from parent to child. A child component can send data back to the parent using a function passed as a prop.
      </p>
      <pre>
        <code>
          {`function Parent() {
  const handleChildClick = (message) => {
    console.log(message);
  };

  return <Child onClick={handleChildClick} />;
}

function Child(props) {
  return <button onClick={() => props.onClick('Hello from Child!')}>Click Me</button>;
}`}
        </code>
      </pre>

      <h3>Conclusion</h3>
      <p>
        React components are essential building blocks that allow developers to create modular and reusable user interfaces. Understanding the different types of components, their lifecycle, and how props and state work is crucial to mastering React. With functional components, hooks, and state management, React makes it easier to create complex applications.
      </p>
    </div>
  );
}

export default ReactComponents;
