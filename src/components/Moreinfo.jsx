import React, { useState, useEffect } from "react";
import axios from "axios";
import weatherbg from '../assets/icons/weather.webm';
const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=b60b1ac296a54556a3c92432241707&q=kochi&aqi=no"
      )
      .then((response) => setCurrentData(response.data))
      
      .catch((error) => console.error("Error Fetching  Data", error));
    

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentData) {
  
    }
  }, [currentData]);

  const getWeekday = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
};
  return (
    
    <div className="background-container2 box  ">
    <video className="video-background2" autoPlay loop muted>
        <source src={weatherbg} type="video/webm" />
        Your browser does not support the video tag.
    </video>
      <div className=" date-tim ">
        <div className="dateday">
        <p className="date">{currentDateTime.toLocaleDateString()}</p>
        <p className="day">{getWeekday(currentDateTime)}</p>
        <p className="time">{currentDateTime.toLocaleTimeString()}</p>

        </div>
        
        <div className="weather">
          {currentData && currentData.location && currentData.current ? (
            <>
              <h3>{currentData.location.name}</h3>
              <h3 className="temp">{currentData.current.temp_c}°C</h3>
              <img className="icon" src={currentData.current.condition.icon} alt="Weather icon" />
              <h5>{currentData.current.condition.text}</h5>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
       
            </div>
      </div>
    
  );
};
export default DateTimeDisplay;
