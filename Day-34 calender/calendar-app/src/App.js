import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the default CSS for the Calendar
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: '', date: '', description: '' });
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to manage selected date

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      setFormData({ title: '', date: '', description: '' });
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date when user selects a date on the calendar
  };

  return (
    <div className="App bg-image">
      <h1>Calendar App</h1>
      <div className="calendar-container"> {/* Add a div for the calendar container */}
        <h2>Select Date</h2>
        <div className="select-date"><Calendar onChange={handleDateChange} value={selectedDate} /></div> {/* Render the Calendar component */}
      </div>
      <div className="event-form">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
          <label>Date:</label>
          <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
          <label>Description:</label>
          <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="event-list">
        <h2>Events</h2>
        {events.map(event => (
          <div key={event._id} className="event">
            <h3>{event.title}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
