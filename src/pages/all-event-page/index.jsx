import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllEventPage() {
  const navigate = useNavigate();
  return (
    <div className="all-event">
      AllEvent
      <button className="btn-light" onClick={() => { navigate('/newEvent'); }} type="button">new event </button>
    </div>

  );
}

export default AllEventPage;
