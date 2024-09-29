import React from 'react'
type Input = {
    className?: string
} & React.ComponentPropsWithoutRef<'input'>
const Input : React.FC<Input> = ({className,...props}) => {
  return (
    <input {...props}  className={`bg-[#e4e7eb] ${className}`} />
  )
}

export default Input