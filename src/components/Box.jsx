import fuelv from '../assets/icons/rupee.webm';
import React, { useState } from "react";
export default function () {
  const [amount, setAmount] = useState(null);
  const [formData, setFormData] = useState({
    distance: null,
    mileage: null,
    fuelprice: null,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const calc = (e) => {
    e.preventDefault();
    let expense = (formData.distance / formData.mileage) * formData.fuelprice;
    console.log(expense);
    setAmount(expense);
  };

  return (
    <div className="box">
      <div className="inputfields">
        <form action="" onSubmit={calc}>
          <label htmlFor="distance">Distance(KM)</label>
          <input
            type="number"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
          <label htmlFor="mileage">Mileage/Litre</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />
          <label htmlFor="fuelprice">Fuel price</label>
          <input
            type="number"
            id="fuelprice"
            name="fuelprice"
            value={formData.fuelprice}
            onChange={handleChange}
          />
          <br />
          <div className="button-container">
            <video className="video-background" autoPlay loop muted>
              <source src={fuelv} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <button className="video-button">Calculate</button>
          </div>{" "}
        </form>

        {amount && <h3>&#8377; {amount.toFixed(1)}</h3>}
      </div>
    </div>
  );
}
