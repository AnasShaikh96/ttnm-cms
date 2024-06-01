import { Button, Input } from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[36rem] h-fit border p-10 rounded-lg bg-gray-50 shadow-sm shadow-black-700">

        <h2 className="text-4xl text-center mb-10 font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>

        <div className="mb-7">
          <Input variant="outlined" color="gray" label="Email" type="email" placeholder="Email" crossOrigin={undefined} />
        </div>
        <div className="mb-10">
          <Input variant="outlined" color="gray" label="Password" type="password" placeholder="Password" crossOrigin={undefined} />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Button variant="outlined" color="deep-purple">Sign Up</Button>
          <Button variant="filled" color="deep-purple">Login</Button>
        </div>

      </div>
    </div>
  )
}
