// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Change this to your name or leave it empty

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Image />
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://via.placeholder.com/150" alt="Hello" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
};

export default App;
