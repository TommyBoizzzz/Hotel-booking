function HotelCard({ hotel }) {
  return (
    <div className="card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="card-body">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <p>
          <b>${hotel.price}/night</b>
        </p>

        <button className="btn">Book Now</button>
      </div>
    </div>
  );
}

export default HotelCard;