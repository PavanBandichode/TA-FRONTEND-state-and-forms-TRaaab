import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  handleBasketball = () => {
    this.setState({
      image: <img src="./assets/basketball.jpg" alt="basketball" />,
    });
  };

  handlePubG = () => {
    this.setState({
      image: <img src="./assets/pubg.jpeg" alt="pubg" />,
    });
  };

  handleTiger = () => {
    this.setState({
      image: <img src="./assets/tiger.jpg" alt="tiger" />,
    });
  };

  handlePhone = () => {
    this.setState({
      image: <img src="./assets/phone.jpg" alt="phone" />,
    });
  };

  handleLaptop = () => {
    this.setState({
      image: <img src="./assets/laptop.jpg" alt="laptop" />,
    });
  };

  handleCricket = () => {
    this.setState({
      image: <img src="./assets/cricket.jpg" alt="cricket" />,
    });
  };

  render() {
    return (
      <center>
        <h1>Handling State</h1>
        <button onClick={this.handleBasketball}>Basketball</button>
        <button onClick={this.handlePubG}>PubG</button>
        <button onClick={this.handleTiger}>Tiger</button>
        <button onClick={this.handlePhone}>Phone</button>
        <button onClick={this.handleLaptop}>Laptop</button>
        <button onClick={this.handleCricket}>Cricket</button>

        <div>{this.state.image}</div>
      </center>
    );
  }
}

export default App;
