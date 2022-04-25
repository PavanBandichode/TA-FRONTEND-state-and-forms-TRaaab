import React from "react";
import questions from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: "",
    };
  }
  handleClick = (que) => {
    this.setState({
      activeQuestion: que,
    });
  };
  render() {
    return (
      <div>
        <ul>
          {questions.map((qs, i) => (
            <li key={i} onClick={() => this.handleClick(qs.Q)}>
              <div>{qs.Q}</div>
              <h3>{this.state.activeQuestion === qs.Q ? qs.A : ""}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
