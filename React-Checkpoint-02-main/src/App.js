// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap';
import PlayersList from './PlayersList';

const App = () => {
  return (
    <Container className="mt-5">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </Container>
  );
};

export default App;
