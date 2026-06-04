import { useState } from "react";
import "./App.css";
import { hotels } from "./data/hotels";

function App() {
  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter((h) =>
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />

      <div className="grid">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h2>🏨 HotelBook</h2>
      <button className="btn">Login</button>
    </div>
  );
}

function Hero({ search, setSearch }) {
  return (
    <div className="hero">
      <h1>Find Your Perfect Stay</h1>

      <div className="search-box">
        <input
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

function HotelCard({ hotel }) {
  return (
    <div className="card">
      <img src={hotel.image} alt={hotel.name} />
      <div className="card-body">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <p><b>${hotel.price}/night</b></p>
        <button className="btn">Book Now</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ textAlign: "center", marginTop: 40 }}>
      © 2026 HotelBook. All rights reserved.
    </p>
  );
}

export default App;