const BASE_API_URL = "http://localhost:3000/api/auth";

export const signup = (userData) => {
  return fetch(`${BASE_API_URL}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const login = (userData) => {
  return fetch(`${BASE_API_URL}/signin`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const setLocalStorage = (key, value) => {
  if (!typeof window === "undefined")
    localStorage.setItem(key, JSON.stringify(value));
};

export const isAuth = () => {
  if (!typeof window === "undefined") {
    const authToken = localStorage.getItem("auth-token");

    console.log(authToken);

    return fetch(`${BASE_API_URL}/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    })
      .then((response) => response.json())
      .then((data) => data.userAuthenticated);
  }
};
