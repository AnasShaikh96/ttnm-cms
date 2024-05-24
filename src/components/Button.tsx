
interface IProps {
  title: string,
  variant?: string,
  width?: string,
  btnType?: "button" | "submit" | "reset" | undefined
}

export default function Button({ title, variant, width, ...rest }: IProps) {


  let btnVariant: string = '';
  if (variant === 'primary') {
    btnVariant = 'border-black text-white bg-black  hover:text-black hover:bg-white '
  } else if (variant === 'secondary') {
    btnVariant = 'border-black text-black  hover:text-white hover:bg-black '
  } else {
    btnVariant = 'border-gray-700 text-black  hover:text-white hover:bg-gray-700 '
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
    <button {...rest} className={`border-2 shadow-sm px-6 py-2 rounded-lg font-semibold hover:transition-all ${btnVariant} ${getWidth}`}>
      {title}
    </button>
  )
}
