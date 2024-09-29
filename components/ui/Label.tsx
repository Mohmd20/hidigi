import React from 'react'
type Label = {
    text: string,
    required?: boolean,
    htmlFor: string
}
const Label : React.FC<Label> = ({text,required,htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className='flex gap-1'>
       <span>{text}</span>
       {required && <span className='text-red-600'>*</span>}
    </label>
  )
}

export default Label