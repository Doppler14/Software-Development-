// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); // State to store user data

// Fetch data using useEffect and axios
useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    setListOfUser(response.data); // Save data to state
    })
    .catch(error => {
    console.error("Error fetching data: ", error);
    });
}, []);

return (
<div>
    <h1>User List</h1>
    <ul>
    {listOfUser.map(user => (
        <li key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        </li>
    ))}
    </ul>
</div>
);
}

export default UserList;
