// src/components/tutorials/ReactComponentAPI.js
import React from "react";
import "./style.css";

const ReactComponentAPI = () => {
  return (
    <div className="tutorial-container">
      <h2>React Component API</h2>
      <p>
        The <strong>React Component API</strong> provides a set of methods that
        you can use to control components and their lifecycle. These methods
        help in handling state, rendering, and updating the component.
      </p>

      <h3>1. <code>setState()</code></h3>
      <p>
        The <code>setState()</code> method is used to update a component’s
        state. When state changes, React re-renders the component to reflect the
        new state.
      </p>
      <pre>
        {`this.setState({ count: this.state.count + 1 });`}
      </pre>

      <h3>2. <code>forceUpdate()</code></h3>
      <p>
        The <code>forceUpdate()</code> method forces a re-render of the
        component. This is usually not recommended, but it can be useful when
        you need to re-render the component without changing the state.
      </p>
      <pre>{`this.forceUpdate();`}</pre>

      <h3>3. <code>render()</code></h3>
      <p>
        The <code>render()</code> method is a lifecycle method that outputs the
        HTML for a component. It is required for all class components.
      </p>
      <pre>
        {`render() {
  return (
    <div>Hello, World!</div>
  );
}`}
      </pre>

      <h3>4. <code>componentDidMount()</code></h3>
      <p>
        The <code>componentDidMount()</code> method is called immediately after
        a component is added to the DOM. This is often where you would initiate
        API calls or set up event listeners.
      </p>
      <pre>
        {`componentDidMount() {
  console.log("Component has mounted.");
}`}
      </pre>

      <h3>5. <code>componentDidUpdate()</code></h3>
      <p>
        The <code>componentDidUpdate()</code> method is invoked after a
        component updates due to state or props changes. It is useful for
        handling tasks that depend on updated component data.
      </p>
      <pre>
        {`componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Count has updated.");
  }
}`}
      </pre>

      <h3>6. <code>componentWillUnmount()</code></h3>
      <p>
        The <code>componentWillUnmount()</code> method is called just before a
        component is removed from the DOM. This is typically where you would
        clean up resources like timers or event listeners.
      </p>
      <pre>
        {`componentWillUnmount() {
  console.log("Component is being removed.");
}`}
      </pre>
    </div>
  );
};

export default ReactComponentAPI;
