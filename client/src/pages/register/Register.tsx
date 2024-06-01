
import { Button, Input } from "@material-tailwind/react";
import ArrowLeft from "../../assets/icons/ArrowLeft";

export default function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="w-[36rem] h-fit border p-10 rounded-lg bg-white shadow-md shadow-black-700">
        <h2 className="text-4xl text-center mb-10 font-serif font-bold ">Clone<span className="text-deep-purple-600 underline underline-offset-4">ium</span></h2>


        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-7">
            <Input variant="outlined" color="gray" label="First Name" type="text" placeholder="First Name" crossOrigin={undefined} />
          </div>
          <div className="mb-7">
            <Input variant="outlined" color="gray" label="Last Name" type="text" placeholder="Last Name" crossOrigin={undefined} />
          </div>
        </div>

        <div className="mb-7 w-1/2 pe-3">
          <Input variant="outlined" color="gray" label="Age" type="text" placeholder="Age" crossOrigin={undefined} />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-7">
            <Input variant="outlined" color="gray" label="City" type="text" placeholder="City" crossOrigin={undefined} />
          </div>
          <div className="mb-7">
            <Input variant="outlined" color="gray" label="State" type="text" placeholder="State" crossOrigin={undefined} />
          </div>
        </div>

        <div className="mb-7">
          <Input variant="outlined" color="gray" label="Email" type="email" placeholder="Email" crossOrigin={undefined} />
        </div>
        <div className="mb-10">
          <Input variant="outlined" color="gray" label="Password" type="password" placeholder="Password" crossOrigin={undefined} />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Button variant="text" color="deep-purple" className=" flex items-center gap-3 justify-center">
            <ArrowLeft classProps={'size-4'} />
            Back</Button>
          <Button variant="filled" color="deep-purple">Sign Up</Button>
        </div>

        {/*
         <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-3">
            <label htmlFor="firstName" className="text-gray-500">First Name</label>
            <input type="text" name="firstName" className="w-full border p-1.5 rounded-lg focus:outline-gray-300" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="text-gray-500">Last Name</label>
            <input type="text" name="lastName" className="w-full border p-1.5 rounded-lg focus:outline-gray-300" />
          </div>
        </div> */}

        {/* <label htmlFor="email" className="text-gray-500">Email</label>
        <input type="email" name="email" className="w-full border p-2 mb-3 rounded-lg focus:outline-gray-300" />

        <label htmlFor="password" className="text-gray-500">Password</label>
        <input type="password" name="password" className="w-full border p-2 mb-6 rounded-lg focus:outline-gray-300" />

        <div className="grid grid-cols-2 gap-x-4">
          <Button title="Back" variant="secondary" />
          <Button title="Register" variant="primary" />
        </div> */}
      </div>
    </div>
  )
}
