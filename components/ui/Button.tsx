import React from 'react'
type button = {
    children : React.ReactNode | string,
    className? : string,
  } & React.ComponentPropsWithoutRef<'button'>
const Button : React.FC<button> =  ({children,className,...props}) => {
  return (
    <button {...props} className={`px-6 flex text-white rounded-md gap-2 items-center justify-center  py-2 bg-[#4287db] ${className}`}>{children}</button>
  )
}

export default Button