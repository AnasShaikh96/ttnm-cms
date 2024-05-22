
export default function Button({ title }: {
  title: string
}) {
  return (
    <button className='w-32 border-2 border-black p-2 rounded-lg text-black font-semibold hover:text-white hover:bg-black hover:transition-all'>
      {title}
    </button>
  )
}
