const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// AI endpoint (Google Gemini AI integration)
app.post('/recommend', async (req, res) => {
  const { userInput } = req.body;

  const recommendations = await getAIRecommendations(userInput); 

  if (recommendations) {
    res.json({ recommendations });
  } else {
    res.status(500).send('Error in AI Recommendation');
  }
});

// Mock AI recommendation
const getAIRecommendations = async (input) => {
  return ['Beach vacation', 'Mountain hiking', 'City tour']; 
};
app.post('/sendNotification', async (req, res) => {
  const { title, body, token } = req.body;
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    await admin.messaging().send(message);
    res.send('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
