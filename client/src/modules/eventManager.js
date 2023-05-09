import { getToken } from "./authManager";

const _apiUrl = '/api/event';

export const getAllEvents = (usePagination, increment, offset) => {
  return getToken().then(token => {
    return fetch(`${_apiUrl}?usePagination=${usePagination}${(increment ? `&increment=${increment}` : "")}${(offset ? `&offset=${offset}` : "")}`, {
      method: "GET",
      headers: {
                Authorization: `Bearer ${token}`
    }
    }).then((res) => res.json())
  })
}; 

export const addEvent = (event) => {
  return getToken().then(token => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
  })
};

export const deleteEvent = (eventId) => {
  return getToken().then(token => {
      return fetch(`${_apiUrl}/${eventId}`, {
          method: "DELETE",
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
  })
}


export const editCategory = (oldName, eventName) => {
  return getToken().then(token => {
      return fetch(`${_apiUrl}?oldName=${oldName}&newName=${eventName}`, {
          method: "PUT",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
          }
      })
  })
}

