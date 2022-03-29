import React from "react";
import MovieCard from "./MovieCard";
import Movies from "../Movies";

function MakeMovieCard(movie){

  return(
    <MovieCard
      key = {movie.id}
      mName = {movie.mName}
      imgsrc = {movie.imgsrc}
    />
  );
}

export default function Gallery() {
  return (
    <div className="gallery">
      {Movies.map(MakeMovieCard)}
    </div>
  );
}
