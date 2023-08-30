import React from 'react';
import { Link } from 'react-router-dom';

function AllEventPage() {
  return (
    <div className="all-event">
      AllEventPage
      <Link to="/newEvent">new event</Link>
    </div>

  );
}

export default AllEventPage;
