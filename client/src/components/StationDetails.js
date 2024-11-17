
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";

function StationDetails() {
  const { id } = useParams();
  const [station, setStation] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/stations/${id}`).then((response) => {
      setStation(response.data);
    });
  }, [id]);

  if (!station) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{station.name}</h2>
      <p><strong>Location:</strong> {station.location}</p>
      <p><strong>Availability:</strong> {station.availability ? "Available" : "Occupied"}</p>
    </div>
  );
}

export default StationDetails;
