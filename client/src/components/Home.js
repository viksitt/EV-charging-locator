
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Home() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stations").then((response) => {
      setStations(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Electric Vehicle Charging Locator</h1>
      <ul>
        {stations.map((station) => (
          <li key={station._id}>
            <Link to={`/station/${station._id}`}>{station.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
