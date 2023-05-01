const baseUrl = '/api/event';

export const getAllEvents = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addEvent = (event) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
};