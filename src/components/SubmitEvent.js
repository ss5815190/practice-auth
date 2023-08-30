const SubmitEvent = async ({
  id, title, image, description, date,
}) => {
  await fetch(
    'http://localhost:8080/events',
    {
      method: 'POST',
      body: JSON.stringify({
        id, title, image, description, date,
      }),
    },
  );
};

export default SubmitEvent;
