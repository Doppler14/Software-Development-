import React from "react";

const MovieCard = ({ movie }) => {
const { title, description, posterURL, rating } = movie;
return (
<div className="movie-card">
    <img src={posterURL} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <span>Rating: {rating}</span>
</div>
);
};

export default MovieCard;
