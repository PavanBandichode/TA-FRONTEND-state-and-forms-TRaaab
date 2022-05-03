import React from "react";
import Header from "./Header";
import Aside from "./Aside";
// import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Aside />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
