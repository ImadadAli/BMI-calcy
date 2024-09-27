import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    gender: '',
  });

  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const calculateBMI = () => {
    let heightInMeters = formData.height * 0.3048;
    let bmiValue = formData.weight / (heightInMeters * heightInMeters);
    let categoryValue;

    if (formData.gender === "male") {
      if (bmiValue < 18.5) {
        categoryValue = "Underweight";
      } else if (bmiValue < 25) {
        categoryValue = "Normal weight";
      } else if (bmiValue < 30) {
        categoryValue = "Overweight";
      } 
    } else {
      if (bmiValue < 16) {
        categoryValue = "Underweight";
      } else if (bmiValue < 24) {
        categoryValue = "Normal weight";
      } else if (bmiValue < 30) {
        categoryValue = "Overweight";
      } else {
        categoryValue = "Obese";
      }
    }

    setBmi(bmiValue.toFixed(2));
    setCategory(categoryValue);
  };

  return (
    <div className="background-container">
      <div className="green-border-container">
        <h1> BMI</h1>
        <form onSubmit={handleSubmit}>
          <input className='fom' type="text" value={formData.height} name="height" placeholder="Enter your height" onChange={handleChange}/>
          <br />
          <input className='fom' type="text" name="weight" value={formData.weight} placeholder="Enter Your Weight" onChange={handleChange}/><br />
          <select className='fom' id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br />
          <button type="submit" onClick={calculateBMI}>Submit</button>
        </form>
        <p className='result'>{bmi}{' '}{category}</p>
      </div>
    </div>
  );
}

export default App;