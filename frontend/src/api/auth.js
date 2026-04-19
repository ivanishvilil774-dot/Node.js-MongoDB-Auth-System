import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/users",
});

export const registerUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/login", data);