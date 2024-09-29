'use client'
import React, { useState } from 'react'
import { useCreateUser } from '@/hook/query/useCreateUser';

const LoginForm = () => {

    const [userData, setUserData] = useState({
        userName:"",
        password:""
    })
    const { mutate , isPending , isError , error } = useCreateUser()
    const handleChangeData = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserData(data => {
            return {...data, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        mutate(userData)
    }
    if(isError){
        return <div>{error.message}</div>
    }
    return (
        <div className='w-full h-full flex items-center justify-center mt-24'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-3 w-[50%]'>
                <label htmlFor="username">username</label>
                <input name='userName' type="text" id='username' className='border-slate-900 border-2 w-[30%]' onChange={(e) => handleChangeData(e)} />
                <label htmlFor="password">password</label>
                <input name='password' type="password" id='password' className='border-slate-900 border-2 w-[30%]' onChange={(e) => handleChangeData(e)} />
                <button disabled={isPending} type='submit' className='bg-emerald-300 p-[10px] rounded-md'>login</button>
            </form>
        </div>
    )
}

export default LoginForm