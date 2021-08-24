import React, { useState, useEffect } from "react";
import Tours from "./Pages/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((oldTours) => oldTours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main className="section">
        <div className="spinner"></div>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section">
        <h1>There was an error...</h1>
      </main>
    );
  }

  if (tours.length === 0) {
    return (<main>
      <div className="title">
        <h2>No tours left</h2>
        <div className="underline"></div>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
    );
  }

  return (
    <main className="section">
      <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </main>
  );
};

export default App;
