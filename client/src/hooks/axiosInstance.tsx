import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/'
})


axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  console.log(res);

  return res
}) 