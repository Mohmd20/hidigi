import React from 'react'
type button = {
    children : React.ReactNode | string,
    className? : string,
  } & React.ComponentPropsWithoutRef<'button'>
const Button : React.FC<button> =  ({children,className,...props}) => {
  return (
    <button {...props} className={`bg-slate-800 rounded-tl-[30px] rounded-bl-[60px] rounded-br-[30px] rounded-tr-[60px] text-white  px-[40px] py-[18px] ${className}`}>{children}</button>
  )
}

export default Button