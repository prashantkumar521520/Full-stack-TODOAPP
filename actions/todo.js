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

export const addTodo = async (task) => {
  // console.log(task);
  const response = await fetch(`${BASE_API_URL}/create-todo`, {
    method: "POST",
    body: JSON.stringify({ task: task }),
    headers: {
      "Content-Type": "application/json",
      "auth-token": getLocalStorage("auth-token"),
    },
  });
  return response;
};

export const deleteTodo = async (TaskId) => {
  // console.log(task);
  const response = await fetch(`${BASE_API_URL}/todos/${TaskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": getLocalStorage("auth-token"),
    },
  });
  return response;
};

export const updateTodo = async (task) => {
  // console.log(task);
  const response = await fetch(`${BASE_API_URL}/todos/${task._id}`, {
    method: "PUT",
    body: JSON.stringify({ task: task }),
    headers: {
      "Content-Type": "application/json",
      "auth-token": getLocalStorage("auth-token"),
    },
  });
  return response;
};
