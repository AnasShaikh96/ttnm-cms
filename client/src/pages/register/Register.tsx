
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Register() {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="w-[36rem] h-fit border p-10 rounded-lg bg-white shadow-md shadow-black-700">
        <h2 className="text-4xl text-center mb-10 font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>


        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-7">
            <Input title={'First Name'} type="text" />
            {/* <Input variant="outlined" color="gray" label="First Name" type="text" placeholder="First Name" crossOrigin={undefined} /> */}
          </div>
          <div className="mb-7">
            <Input title={'Last Name'} type="text" />
            {/* <Input variant="outlined" color="gray" label="Last Name" type="text" placeholder="Last Name" crossOrigin={undefined} /> */}
          </div>
        </div>

        <div className="mb-7 w-1/2 pe-3">
          <Input title={'Age'} type="text" />
          {/* <Input variant="outlined" color="gray" label="Age" type="text" placeholder="Age" crossOrigin={undefined} /> */}
        </div>

        <div className="mb-7">
          <Input title={'Email'} type="email" />
          {/* <Input variant="outlined" color="gray" label="Email" type="email" placeholder="Email" crossOrigin={undefined} /> */}
        </div>
        <div className="mb-10">
          <Input title={'Password'} type="password" />

          {/* <Input variant="outlined" color="gray" label="Password" type="password" placeholder="Password" crossOrigin={undefined} /> */}
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Button title={'Back'} onClick={() => navigate('/')} />
          <Button variant="primary" btnType="button" title="Sign Up" />
        </div>

      </div>
    </div>
  )
}
