import Button from "../../components/Button";

export default function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 h-fit border p-10 rounded-lg ">

        <h2 className="text-2xl text-center mb-4 font-semibold">Register</h2>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-3">
            <label htmlFor="firstName" className="text-gray-500">First Name</label>
            <input type="text" name="firstName" className="w-full border p-1.5 rounded-lg focus:outline-gray-300" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="text-gray-500">Last Name</label>
            <input type="text" name="lastName" className="w-full border p-1.5 rounded-lg focus:outline-gray-300" />
          </div>
        </div>

        <label htmlFor="email" className="text-gray-500">Email</label>
        <input type="email" name="email" className="w-full border p-2 mb-3 rounded-lg focus:outline-gray-300" />

        <label htmlFor="password" className="text-gray-500">Password</label>
        <input type="password" name="password" className="w-full border p-2 mb-6 rounded-lg focus:outline-gray-300" />

        <div className="grid grid-cols-2 gap-x-4">
          <Button title="Back" variant="secondary" />
          <Button title="Register" variant="primary" />
        </div>
      </div>
    </div>
  )
}
