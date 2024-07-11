import { HTMLInputTypeAttribute } from "react"


interface InputProps {
  title: String,
  type: HTMLInputTypeAttribute,

}

export default function Input({
  title,
  type
}: InputProps) {
  return (
    <>
      <label className="block">{title}</label>
      <input className="border border-gray-800 flex w-full p-2 rounded-md 
      focus:outline-violet-500 focus:shadow-md focus:shadow-violet-200
      focus-within:outline-violet-800" type={type} />
    </>
  )
}
