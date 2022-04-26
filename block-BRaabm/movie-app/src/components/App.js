import React from "react";
import data from "./data.json";
import MovieList from "./MovieList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: "",
      closed: true,
    };
  }
  // handleClick = (title) => {
  //   this.setState({
  //     currentMovie: title,
  //     closed: false,
  //   });
  // };
  // handleClose = () => {
  //   this.setState({
  //     currentMovie: "",
  //     closed: !this.state.closed,
  //   });
  // };
  render() {
    return (
      <>
        <section>
          <h1 className="heading">Movie APP</h1>
          <MovieList movies={data} />
        </section>
      </>
    );
  }
}
export default App;
