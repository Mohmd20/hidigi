import React from 'react'
import Label from '../ui/Label'
import Input from '../ui/Input'

const Global = () => {
  return (
    <div className='flex flex-col gap-3 rtl'>
        <div className='flex gap-2'>
            <Label htmlFor='codeItem' text='کد آیتم' required/>
            <Input name='codeItem'   />
            <Label htmlFor='itemName' text='نام آیتم' required />
            <Input name='itemName'   />
        </div>
        <div className='flex gap-2'></div>
        <div className='flex gap-2'></div>
        <div className='flex gap-2'></div>
        <div className='flex gap-2'></div>
        <div className='flex gap-2'></div>
        <div className='flex gap-2'></div>
    </div>
  )
}

export default Global