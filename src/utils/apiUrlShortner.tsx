import axios from "axios";


const API_URL = "https://localhost:7128/";



export const login = async (email: string, password: string) => {
  const response = await axios.post(API_URL + "v1/users/login", {
        email,
        password,
    }, {withCredentials: true});

  return response;
};

export const get = async (url: string) => {
  const response = await axios.get(url).catch((err) => err.response);

  return response.data;
};

