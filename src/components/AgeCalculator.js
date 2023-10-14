import React, { useState } from 'react';
import "./AgeCalculator.css"
function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="App">
      <center>
      <h1>Age Calculator</h1>
      <label>Enter your date of birth</label>
      <br />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br />
      <button
        className = "calcbutton"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age && <h3>You are {age} years old</h3>}
      </center>
    </div>
  );
}

export default App;
