import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://api.pinterest.com/v5/pins/{pin_id}');
        const data = await response.json();
        setPins(data);
      } catch (error) {
        console.error('Failed to fetch pins:', error);
      }
    };

    fetchPins();
  }, []);

  return (
    <div className="app">
      <h1 className="header">📌 My Pin Board</h1>
      <div className="pin-grid">
        {pins.map((pin) => (
          <div key={pin.id} className="pin-card">
            <img src={pin.imageUrl} alt={pin.title} className="pin-image" />
            <div className="pin-info">
              <h2>{pin.title}</h2>
              <p>{pin.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;