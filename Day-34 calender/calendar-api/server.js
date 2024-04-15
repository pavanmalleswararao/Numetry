// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Event Model
const Event = mongoose.model('Event', {
  title: String,
  date: Date,
  description: String,
});

// Routes
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/api/events', async (req, res) => {
  const { title, date, description } = req.body;
  const event = new Event({ title, date, description });
  await event.save();
  res.status(201).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
