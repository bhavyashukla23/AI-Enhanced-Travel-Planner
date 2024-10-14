const express = require('express');
const router = express.Router();
const axios = require('axios');
const firebaseAdmin = require('../firebase-config');

// Google Gemini AI integration (mock API)
router.post('/', async (req, res) => {
  const { destination, activities, budget } = req.body;
  
  try {
    // Call to Google Gemini AI (mocked response)
    const recommendations = await getTravelRecommendations(destination, activities, budget);
    
    // Send AI recommendations to client
    res.status(200).json(recommendations);

    // Send a Firebase Cloud Message (FCM) notification
    const notification = {
      notification: {
        title: "Travel Recommendations Ready!",
        body: `Your recommendations for ${destination} have been generated.`,
      },
      topic: 'travel',
    };
    await firebaseAdmin.messaging().send(notification);
    
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Unable to fetch recommendations.' });
  }
});

// Simulate an AI recommendation API
const getTravelRecommendations = async (destination, activities, budget) => {
  // Mock recommendations
  return [
    `Explore popular attractions in ${destination}`,
    `Try local activities like ${activities}`,
    `Budget-friendly options available within $${budget}`
  ];
};

module.exports = router;
