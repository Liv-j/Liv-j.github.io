import React from 'react';
import { Link } from 'react-router-dom';

function Voyages() {
  return (
    <div>
      <h1>Voyages</h1>
      <Link to="/reserve" className="btn btn-primary">Reserve Now</Link>
    </div>
  );
}

export default Voyages;
