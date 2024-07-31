import instance from "./axios";

// const API = "http://localhost:9001/api";
export const registerRequest = (user) => instance.post(`/register`, user);

export const loginRequest = (user) => instance.post(`/login`, user);

export const verifyTokenRequest = () => instance.get("/verify");

