import { useState } from "react"
import { AXIOS } from "../helpers/axios"

const useAPI = () => {

  const [data, setData] = useState([])


  const postData = async (url: string, data: any) => {

    try {

      const response = await AXIOS.post(url, data, {
        headers: { "Content-Type": "application/json" }
      })


      setData(response.data)

    } catch (error) {

      setData([])

    }


  }

  return {
    data,
    postData
  }

}

export default useAPI;

