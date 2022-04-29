import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      fontSize: 50,
    };
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  changeSizeBySlider = (event) => {
    this.setState({ fontSize: event.target.value });
  };
  render() {
    let styles = [
      "Hurricane",
      "Inspiration",
      "Lato",
      "Montserrat",
      "Opensans",
      "Oswald",
      "Palette",
      "Poppins",
      "Red",
      "Roboto",
      "Condensed",
      "Source",
    ];
    return (
      <>
        <main>
          <h1>👑😄Font-Tester😄👑</h1>
          <div className="header">
            <input
              type="text"
              placeholder="Type something...."
              onChange={this.handleChange}
            />
            <input
              type="range"
              min="10"
              max="30"
              value="20"
              onChange={this.changeSizeBySlider}
            />
          </div>
          <div className="grid">
            {styles.map((style, i) => (
              <div key={i} className="box">
                <h2>{style}</h2>
                <p className={style} style={{ fontSize: this.state.fontSize }}>
                  {this.state.inputText}
                </p>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
}
export default App;
