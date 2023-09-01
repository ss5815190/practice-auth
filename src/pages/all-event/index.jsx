import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

function AllEventPage() {
  const navigate = useNavigate();
  const events = useLoaderData();
  return (
    <div className="all-event">
      <h1>AllEvent</h1>
      <button className="btn-light" onClick={() => { navigate('/newEvent'); }} type="button">new event </button>
      {events.map((e) => (
        <a href={`event/${e.id}`} key={e.id}>
          <div className="events-wrap">
            <h1 className="event-title">{e.title}</h1>
            <div className="event-date">{e.date}</div>
            <div className="event-image"><img src={e.image} alt={e.id} /></div>
            <div className="event-description">{e.description}</div>
          </div>
        </a>
      ))}
    </div>

  );
}

export default AllEventPage;
