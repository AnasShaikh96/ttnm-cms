import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import useAxios from "../../hooks/axiosInstance";

export default function Login() {
  const navigate = useNavigate();

  const loginAPI = useAxios()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await loginAPI.post('http://localhost:3001/login', { ...formData })
      .then((data) => {

        const expirationTime = new Date().getTime() + (60 * 60)
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('expiresIn', JSON.stringify(expirationTime))

        navigate('/posts');

      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[36rem] h-fit border p-10 rounded-lg bg-white shadow-md shadow-black-700">

        <h2 className="text-4xl text-center mb-10 font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>

        <form onSubmit={(e) => HandleSubmit(e)}>
          <div className="mb-7">
            <Input title={'Email'} type="email" HandleChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="mb-10">
            <Input title={'Password'} type="password" HandleChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 ">
            <Button title="Login" variant="primary" btnType="submit" classProps="order-last" />
            <Button title="Sign Up" variant="secondary" onClick={() => navigate('/register')} />
          </div>
        </form>
      </div>
    </div>
  )
}
