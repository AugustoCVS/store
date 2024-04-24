import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

export const BASE_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { api };