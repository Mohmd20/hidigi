import React, { useContext } from 'react'
import Label from '../ui/Label'
import Input from '../ui/Input'
import { Context } from '@/store/Context'

const Storage = () => {
    const ctx = useContext(Context)
    return (
        <div dir='rtl' className='flex gap-2'>
            <div className='flex flex-col '>
                <Label htmlFor='daily' required text='موجودی روزانه:' />
                <Input
                 onChange={(e) => {
                    ctx?.setData(d => {
                        return {
                            ...d,
                            dailyInventory:Number(e.target.value)
                        }
                    })
                }}
                theme='dark' name='daily' />
            </div>
            <div className='flex flex-col '>
                <Label htmlFor='daily' required text='موجودی پیش فرض:' />
                <Input 
                 onChange={(e) => {
                    ctx?.setData(d => {
                        return {
                            ...d,
                            fixDailyInventory:Number(e.target.value)
                        }
                    })
                }}
                theme='dark' name='daily' />
            </div>
        </div>
    )
}

export default Storage