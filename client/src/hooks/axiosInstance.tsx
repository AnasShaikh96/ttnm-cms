import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/'
})



const useAxios = () => {

  useEffect(() => {

    const responseIntercept = axiosInstance.interceptors.response.use((res: AxiosResponse) => res, async (err) => {

      if (err.response && err.response.status === 401) {
        try {

          // Refresh Token Flow.

        } catch (error) {
          Promise.reject(error)
        }
      }

      return Promise.reject(err)
    })


    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {


        let getToken = localStorage.getItem('token');

        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = "Bearer " + getToken;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );


    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    }

  }, [])

  return axiosInstance;
}

export default useAxios;