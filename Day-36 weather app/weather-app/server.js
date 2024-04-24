const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/weather-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Weather Schema
const weatherSchema = new mongoose.Schema({
    city: String,
    weather: String,
    temperature: Number
});

const Weather = mongoose.model('Weather', weatherSchema);

app.use(express.json());

// Fetch weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = {
            city: response.data.name,
            weather: response.data.weather[0].description,
            temperature: response.data.main.temp
        };
        const weather = new Weather(weatherData);
        await weather.save();
        res.json(weatherData);
    } catch (error) {
        res.status(400).json({ error: 'Unable to fetch weather. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
