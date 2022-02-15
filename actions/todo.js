import { useEffect, useState } from "react";
import { getLocalStorage } from "./auth";

export const BASE_API_URL = "http://localhost:3000/api";

export const getAllTodos = async (userId) => {
  const todos = await fetch(`${BASE_API_URL}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": getLocalStorage("auth-token"),
    },
  });
  return todos;
};
