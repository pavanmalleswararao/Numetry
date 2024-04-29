// client/src/App.js

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password
      });
      console.log(res.data); // You can redirect user to login page here
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </div>
  );
}

export default App;
