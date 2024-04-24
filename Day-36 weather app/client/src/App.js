import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const WeatherInfo = styled.div`
  margin-top: 20px;
`;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const getWeather = async () => {
    try {
      const response = await axios.get(`/weather?city=${city}`);
      setWeather(`Weather in ${response.data.city}: ${response.data.weather}, Temperature: ${response.data.temperature}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeather('Unable to fetch weather. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Weather App</Title>
      <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <Button onClick={getWeather}>Get Weather</Button>
      <WeatherInfo>{weather}</WeatherInfo>
    </Container>
  );
}

export default App;
