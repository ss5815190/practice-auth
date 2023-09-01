import { json } from 'react-router-dom';

const SubmitEvent = async ({
  id, title, image, description, date, token, navigate,
}) => {
  const response = await fetch(
    'http://localhost:8080/events',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        id, title, image, description, date,
      }),
    },
  );
  if (response.status === 422) {
    const responseData = await response.json();
    console.log('錯誤資訊：', responseData.errors);
    return responseData.errors;
  }
  if (response.status === 401) {
    const responseData = await response.json();
    console.log('錯誤資訊：', responseData);
    return responseData;
  }
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }
  return navigate(-1);
};

export default SubmitEvent;
