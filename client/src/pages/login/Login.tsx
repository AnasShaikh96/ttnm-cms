import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
  const navigate = useNavigate();

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[36rem] h-fit border p-10 rounded-lg bg-white shadow-md shadow-black-700">

        <h2 className="text-4xl text-center mb-10 font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>

        <form onSubmit={(e) => HandleSubmit(e)}>
          <div className="mb-7">
            <Input title={'Email'} type="email" />
          </div>
          <div className="mb-10">
            <Input title={'Password'} type="password" />
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
