import React from "react";

function MovieInfo(props) {
  return (
    <div className="movie-info-container">
      <h1>{props.movie.Title}</h1>
      <h3>{props.movie.Year}</h3>
      <h3>Released: {props.movie.Rated}</h3>
      <h3>{props.movie.Runtime}</h3>
      <h3>{props.movie.Genre}</h3>
      <h3>Director: {props.movie.Director}</h3>
      <h3>Writer: {props.movie.Writer}</h3>
      <h3>Actors: {props.movie.Actors}</h3>
      <h3>Plot: {props.movie.Plot}</h3>
      <h3>Language: {props.movie.Language}</h3>
      <h3>Country: {props.movie.Country}</h3>
      <h3>Awards: {props.movie.Awards}</h3>
      <h3>Metascore: {props.movie.Metascore}</h3>
      <h3>imdbRating: {props.movie.imdbRating}</h3>
      <h3>imdbVotes: {props.movie.imdbVotes}</h3>
      <h3>imdbID: {props.movie.imdbID}</h3>
      <h3>Type: {props.movie.Type}</h3>
      <h3>Response: {props.movie.Response}</h3>
      <div className="image-gallery flex">
        {props.movie.Images.map((image) => {
          return <img src={image} />;
        })}
      </div>
      <button className="cross" onClick={props.handleClose}>
        X
      </button>
    </div>
  );
}

export default MovieInfo;
