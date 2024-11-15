import React from "react";

const Filter = ({ filter, setFilter }) => {
const handleTitleChange = (e) => {
setFilter({ ...filter, title: e.target.value });
};

const handleRatingChange = (e) => {
setFilter({ ...filter, rating: parseFloat(e.target.value) });
};

return (
<div className="filter">
    <input
    type="text"
    placeholder="Search by title"
    value={filter.title}
    onChange={handleTitleChange}
    />
    <input
    type="number"
    placeholder="Filter by rating"
    value={filter.rating}
    onChange={handleRatingChange}
    />
</div>
);
};

export default Filter;
