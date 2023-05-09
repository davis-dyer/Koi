import { getToken } from "./authManager"

const _apiUrl = "/api/group"

export const getAllGroups = () => {
    return getToken().then((token) => {
      return fetch(_apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            "An unknown error occurred while trying to get categories.",
          );
        }
      });
    });
  };

  export const addGroup = (group) => {
    return getToken().then(token => {
      return fetch(_apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(group),
      })
    })
  };
  
  export const deleteEvent = (groupId) => {
    return getToken().then(token => {
        return fetch(`${_apiUrl}/${groupId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    })
  }
  
  
  export const editGroup = (oldName, eventName) => {
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
