import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>To the Stars</h1>
      <h2>Your intergalactic journey starts here</h2>
      <Link to="/reserve" className="btn btn-primary">Reserve Now</Link>
    </div>
  );
}

export default Home;
