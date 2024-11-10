// src/components/tutorials/ReactState.js
import React from "react";
import "./style.css";

const ReactState = () => {
  return (
    <div className="tutorial-container">
      <h2>React State</h2>
      <p>
        In React, <strong>state</strong> is an object that holds information
        that influences the output of a component. State is managed within the
        component and can change over time, often in response to user actions.
        When state changes, React re-renders the component to reflect the
        updated data.
      </p>

      <h3>Using State in Class Components</h3>
      <p>
        In class components, state is initialized in the constructor and updated
        using <code>this.setState</code>.
      </p>

      <pre>
        {`class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}`}
      </pre>

      <h3>Using State in Functional Components</h3>
      <p>
        Functional components use the <code>useState</code> hook to create and
        update state.
      </p>

      <pre>
        {`import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
      </pre>

      <h3>Updating State</h3>
      <p>
        State updates can be asynchronous in React. To ensure state changes
        are based on the most recent state, use a function inside
        <code>setState</code> for class components or the updater function in
        <code>useState</code> for functional components.
      </p>

      <pre>
        {`// In class components
this.setState((prevState) => ({
  count: prevState.count + 1
}));

// In functional components
setCount((prevCount) => prevCount + 1);`}
      </pre>
    </div>
  );
};

export default ReactState;
