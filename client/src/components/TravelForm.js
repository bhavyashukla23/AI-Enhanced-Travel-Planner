import React, { useState } from 'react';

const TravelForm = ({ setRecommendations }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch recommendations from the backend AI endpoint
    const response = await fetch('http://localhost:5000/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    setRecommendations(data.recommendations);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your preferences (e.g., beach, mountains)"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Get Recommendations</button>
    </form>
  );
};

export default TravelForm;
