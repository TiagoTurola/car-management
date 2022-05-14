import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
