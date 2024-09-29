import React from 'react'
type Dropdown = {
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'select'>
const DropDown: React.FC<Dropdown> = ({children,...props}) => {
  return (
    <select {...props} className='bg-white border-2 border-black' name="" id="">
        {children}
    </select>
  )
}

export default DropDown