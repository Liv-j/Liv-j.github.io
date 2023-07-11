import React from 'react';
import { Link } from 'react-router-dom';

function Ships() {
  return (
    <div>
      <h1>Our ships</h1>
      <Link to="/reserve" className="btn btn-primary">Reserve Now</Link>
    </div>
  );
}

export default Ships;
