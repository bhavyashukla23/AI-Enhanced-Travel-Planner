import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div>
      <h2>Travel Recommendations</h2>
      <ul>
        {recommendations.length > 0 ? recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        )) : <p>No recommendations available.</p>}
      </ul>
    </div>
  );
};

export default Recommendations;
