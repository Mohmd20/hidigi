import React from 'react'
type Input = {
    className?: string
} & React.ComponentPropsWithoutRef<'input'>
const Input : React.FC<Input> = ({className,...props}) => {
  return (
    <input {...props}  className={`bg-[#e4e7eb] rounded-md pr-2 border-none ${className}`} />
  )
}

export default Input