const express = require("express");
const cors = require("cors");
const app = express();
const axios = require('axios');

app.use(cors());
app.use(express.json());

const weatherUrl='http://api.weatherapi.com/v1/current.json?q='
const apiKey='ceb214290bed44fb9dd123625230305'

app.get('/meteo', async (req, res) => {
  const { q: cityName } = req.query;
  const headers = {'key': apiKey}
  try {
      const response = await axios.get(`${weatherUrl}${cityName}`, { headers });
      console.log(`${weatherUrl}${cityName}`)
      const data = response.data;
      res.json(data);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001.`);
});