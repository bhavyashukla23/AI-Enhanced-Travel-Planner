import React, { useState } from 'react';
import TravelForm from './components/TravelForm';
import Recommendations from './components/TravelSuggestions';
import Notification from './components/Notification';

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="App">
      <h1>AI-Enhanced Travel Planner</h1>
      <TravelForm setRecommendations={setRecommendations} />
      <Recommendations recommendations={recommendations} />
      <Notification />
    </div>
  );
};

export default App;
