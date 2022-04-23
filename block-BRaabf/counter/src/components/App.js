import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decHandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <center>
        <div className="screen">{this.state.counter}</div>
        <div>
          <button onClick={this.incHandler}>Increment</button>
          <button onClick={this.decHandler}>Decrement</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </center>
    );
  }
}
export default App;
