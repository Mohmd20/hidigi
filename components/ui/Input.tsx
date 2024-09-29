import React from 'react'
type Input = {
  className?: string,
  theme: 'dark' | 'light',
} & React.ComponentPropsWithoutRef<'input'>

const Input: React.FC<Input> = ({ className, theme, ...props }) => {
  return (
        <input {...props} className={`${theme == "dark" ? 'bg-[#e4e7eb] border-none' : 'bg-white border-[.5px] border-[#c4c4c4]'} rounded-md p-2 focus:outline-none ${className}`} />
  )
}

export default Input