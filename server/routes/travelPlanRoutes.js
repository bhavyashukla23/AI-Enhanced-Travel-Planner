const express = require('express');
const router = express.Router();
const TravelPlan = require('../model/travelPlan.model.js');

// Create a travel plan
router.post('/', async (req, res) => {
  const { userId, destination, startDate, endDate, preferences } = req.body;
  
  try {
    const newPlan = new TravelPlan({
      userId,
      destination,
      startDate,
      endDate,
      preferences
    });
    
    const savedPlan = await newPlan.save();
    res.json(savedPlan);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all travel plans for a user
router.get('/:userId', async (req, res) => {
  try {
    const plans = await TravelPlan.find({ userId: req.params.userId });
    res.json(plans);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
