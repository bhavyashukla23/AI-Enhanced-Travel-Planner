const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

const authenticateUser = async (idToken) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
};
