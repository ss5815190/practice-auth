import { json } from 'react-router-dom';

const Authentication = async ({
  email, password, mode, navigate,
}) => {
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });

  if (response.status === 422) {
    const responseData = await response.json();
    return responseData.errors;
  }
  if (response.status === 401) {
    const responseData = await response.json();
    return responseData;
  }
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  const resData = await response.json();
  const { token } = resData;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return navigate('/');
};

export default Authentication;
