import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filter }) => {
const filteredMovies = movies.filter(
    (movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
);

return (
<div className="movie-list">
    {filteredMovies.map((movie, index) => (
    <MovieCard key={index} movie={movie} />
    ))}
</div>
);
};

export default MovieList;
