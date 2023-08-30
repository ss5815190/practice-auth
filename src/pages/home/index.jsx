import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      home
      <p>
        <Link to="/event">to event page</Link>
      </p>
    </div>
  );
}

export default Home;
