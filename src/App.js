import React from 'react';
import LiveClock from 'react-live-clock';
import './App.css';

const App = () => (
  <div className="app">
    <LiveClock format="HH:mm:ss.S" ticking interval={100} className="clock" />
  </div>
);

export default App;
