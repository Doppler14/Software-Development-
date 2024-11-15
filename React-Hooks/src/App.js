import React, { useState } from "react";
import MovieList from "../MovieList";
import Filter from "../Filter";

const App = () => {
const [movies, setMovies] = useState([
{
    title: "Inception",
    description: "A mind-bending thriller.",
    posterURL: "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
    rating: 4.5,
},
{
    title: "The Dark Knight",
    description: "A thrilling superhero movie.",
    posterURL: "https://www.imdb.com/title/tt1345836/mediaviewer/rm834516224/?ref_=tt_ov_i",
    rating: 5.0,
},
]);

const [filter, setFilter] = useState({ title: "", rating: 0 });

const addMovie = (newMovie) => {
setMovies([...movies, newMovie]);
};

return (
<div>
    <Filter filter={filter} setFilter={setFilter} />
    <MovieList movies={movies} filter={filter} />
    <AddMovieForm addMovie={addMovie} />
</div>
);
};

const AddMovieForm = ({ addMovie }) => {
const [newMovie, setNewMovie] = useState({
title: "",
description: "",
posterURL: "",
rating: 0,
});

const handleChange = (e) => {
const { name, value } = e.target;
setNewMovie({ ...newMovie, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
    addMovie({ ...newMovie, rating: parseFloat(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
} else {
    alert("Please fill out all fields.");
}
};

return (
<form onSubmit={handleSubmit}>
    <input
    type="text"
    name="title"
    placeholder="Title"
    value={newMovie.title}
    onChange={handleChange}
    required
    />
    <input
    type="text"
    name="description"
    placeholder="Description"
    value={newMovie.description}
    onChange={handleChange}
    required
    />
    <input
    type="text"
    name="posterURL"
    placeholder="Poster URL"
    value={newMovie.posterURL}
    onChange={handleChange}
    required
    />
    <input
    type="number"
    name="rating"
    placeholder="Rating (0-5)"
    step="0.1"
    min="0"
    max="5"
    value={newMovie.rating}
    onChange={handleChange}
    required
    />
    <button type="submit">Add Movie</button>
</form>
);
};

export default App;
