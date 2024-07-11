
interface IProps {
  title: string,
  variant?: string,
  width?: string,
  btnType?: "button" | "submit" | "reset" | undefined
  classProps?: string,
  onClick?: () => void
}

export default function Button({ title, variant, width, classProps, onClick }: IProps) {


  let btnVariant: string = '';
  if (variant === 'primary') {
    btnVariant = ' border-violet-700 text-white bg-violet-700 transition-all  hover:shadow-sm hover:shadow-violet-500 hover:transition-all'
  } else if (variant === 'secondary') {
    btnVariant = 'border-gray-400 text-gray-700'
  } else {
    btnVariant = 'border-gray-700 text-gray-800 hover:text-white hover:bg-gray-700 '
  }


  let getWidth: string = '';
  if (width === 'half') {
    getWidth = 'w-1/2'
  } else if (width === 'full') {
    getWidth = 'w-full'
  } else {
    getWidth = 'w-auto'
  }

  return (
    <button onClick={onClick} className={`border-2 shadow-sm px-6 py-2 rounded-lg font-semibold hover:transition-all ${btnVariant} ${getWidth} ${classProps}`}>
      {title}
    </button>
  )
}
