import Button from "../components/Button";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 h-fit border p-10 rounded-lg ">

        <h2 className="text-xl text-center mb-4">Login</h2>

        <label htmlFor="email" className="text-gray-500">Email</label>
        <input type="email" name="email" className="w-full border p-2 mb-5 rounded-lg" />

        <label htmlFor="email" className="text-gray-500">Password</label>
        <input type="password" name="email" className="w-full border p-2 mb-6 rounded-lg" />

        <div className="grid grid-cols-2 gap-x-4">
          <Button title="Sign Up" variant="secondary" />
          <Button title="Login" variant="primary" />
        </div>

      </div>
    </div>
  )
}
