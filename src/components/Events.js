import { json } from 'react-router-dom';

const Event = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
export default Event;
