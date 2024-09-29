import React from 'react'
type Dropdown = {
    children: React.ReactNode,
    title: string,
    required?: boolean,
    className?:string
} & React.ComponentPropsWithoutRef<'select'>
const DropDown: React.FC<Dropdown> = ({ children,className,title,required, ...props }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className='flex gap-1 self-start'>
                <span>{title}</span>
                {required && <span className='text-red-500'>*</span>}
            </div>
            <select {...props} className={`bg-white border-[.5px] p-2 rounded-md border-[#9e9e9e] `} name="" id="">
                {children}
            </select>
        </div>
    )
}

export default DropDown