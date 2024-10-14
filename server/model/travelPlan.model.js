const mongoose = require('mongoose');

const TravelPlanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  preferences: {
    budget: { type: String },
    activities: [String]
  }
},{timestamps:true});

module.exports = mongoose.model('TravelPlan', TravelPlanSchema);
