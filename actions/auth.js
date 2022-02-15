import { useEffect, useState } from "react";

export const BASE_API_URL = "http://localhost:3000/api/auth";

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
  // if (!typeof window === "undefined")
  localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
  return true
};

export const getLocalStorage = (key) => {
  // if (!typeof window === "undefined")
  return localStorage.getItem(key);
};

export const checkAuthentication = async () => {
  const authToken = getLocalStorage("auth-token");
  const response = await fetch(`${BASE_API_URL}/getuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await response.json();
  return data;
};

// export const isAuth = () => {
//   const [authToken, setAuthToken] = useState(undefined);

//   useEffect(() => {
//     const authToken = localStorage.getItem("auth-token");
//     setAuthToken(authToken);
//   }, []);

//   console.log(authToken);

//   return fetch(`${BASE_API_URL}/getuser`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token": authToken,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => data.userAuthenticated);
// };
