import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetail() {
  const params = useParams();
  return (
    <div>{params.id}</div>
  );
}

export default EventDetail;
