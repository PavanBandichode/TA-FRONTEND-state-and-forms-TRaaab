import React from "react";
import data from "./data.json";
import Header from "./Header";
import Food from "./Food";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }
  render() {
    let menuTypes = ["All", "Breakfast", "Lunch", "Shakes"];
    return (
      <>
        <Header />
        <section>
          <div className="flex">
            {menuTypes.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </div>
          <Food {...data} />
        </section>
      </>
    );
  }
}
export default App;
