import React from 'react';
import { Link } from 'react-router-dom';

function Destinations() {
  return (
    <div>
      <h1>Destinations</h1>
      <Link to="/reserve" className="btn btn-primary">Reserve Now</Link>
    </div>
  );
}

export default Destinations;
