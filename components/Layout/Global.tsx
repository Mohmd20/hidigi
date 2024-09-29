import React from 'react'
import Label from '../ui/Label'
import Input from '../ui/Input'

const Global = () => {
    return (
        <div className='flex flex-col gap-3 px-3' dir='rtl'>
            <div className='flex gap-2'>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor='codeItem' text='کد آیتم' required />
                    <Input placeholder='کد آیتم را وارد کنید' name='codeItem' />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor='itemName' text='نام آیتم' required />
                    <Input name='itemName' placeholder='نام آیتم را وارد کنید' />
                </div>
            </div>
            <div className='flex gap-2'>

            </div>
            <div className='flex gap-2'></div>
            <div className='flex gap-2'></div>
            <div className='flex gap-2'></div>
            <div className='flex gap-2'></div>
            <div className='flex gap-2'></div>
        </div>
    )
}

export default Global