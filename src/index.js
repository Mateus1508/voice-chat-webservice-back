const dialogflow = require('@google-cloud/dialogflow');
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
require('dotenv').config();
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const sessionClient = new dialogflow.SessionsClient({
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email,
    }
});

const projectId = CREDENTIALS.project_id;
const sessionId = v4();
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

async function detectIntent(queryText, language) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: queryText,
        languageCode: language,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  console.log(`Query: ${result.queryText}`);
  console.log(`Response: ${result.fulfillmentText}`);

  return result;
}

detectIntent('what is your name?', 'en-US')
  .then(result => console.log(result))
  .catch(err => console.error('ERROR:', err));
