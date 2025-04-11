import { Component } from "react";

class MyClassComoponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("constructor: component is being constructed");
      }
    
      static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps: sync state from props if needed");
        return null; // no change to state
      }
    
      componentDidMount() {
        console.log("componentDidMount: component mounted to DOM");
        // You can make API calls or subscriptions here
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: should it re-render?");
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate: capture some info before update");
        return null;
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate: component updated");
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount: cleanup before removal from DOM");
      }
    
      increment = () => {
        console.log("increment: updating state");
        this.setState({ count: this.state.count + 1 });
      };
    
      render() {
        console.log(" render: UI rendering");
        return (
          <div>
            <h2>Class Component Lifecycle</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
          </div>
        );
      }
    }
export default MyClassComoponent;