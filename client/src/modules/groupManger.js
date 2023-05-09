import { getToken } from "./authManager";

const _apiUrl = "/api/group";

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

  export const getGroup = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    })
};

  export const addGroup = (grp) => {
    return getToken().then(token => {
      return fetch(_apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(grp),
      })
    })
  };
  
  export const deleteGroup = (groupId) => {
    return getToken().then(token => {
        return fetch(`${_apiUrl}/${groupId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    })
  }
  
  
  export const editGroup = (grp) => {
    return getToken().then(token => {
        return fetch(`${_apiUrl}/${grp.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(grp),
            })
    })
  }
