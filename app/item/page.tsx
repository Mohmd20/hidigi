'use client'
import Global from '@/components/Layout/Global'
import Others from '@/components/Layout/Others'
import Printers from '@/components/Layout/Printers'
import Storage from '@/components/Layout/Storage'
import Button from '@/components/ui/Button'
import { axiosInastance } from '@/services/axiosConfig'
import { Context } from '@/store/Context'
import Cookies from "js-cookie"
import { data } from '@/types/ItemData'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
const Item = () => {
  const router = useRouter()
  const [action, setAction] = useState('global')
  const ctx = useContext(Context)
  async function send(data: data) {
    const res = await axiosInastance.post("https://api.hidigimenu.com/Sale/v1/Item/hidigimenu/Create", data, {
    })
    return res.data
}
useEffect(() => {
  if (!Cookies.get("auth")) {
      router.push("/login")
  }
}, [])
const { mutate } = useMutation({ mutationFn: send, mutationKey: ["ss"] })
  return (
    <div className='w-[80%] h-auto bg-white mx-auto mt-[10%] rounded-md flex gap-4 flex-col py-10 px-7'>
      <div dir='rtl' className='flex gap-4 self-end'>
        <span className={`cursor-pointer border-blue-800 pb-2 ${action == "global" ? 'border-b-2' : ""}`} onClick={() => setAction("global")}>عمومی</span>
        <span className={`cursor-pointer border-blue-800 pb-2 ${action == "printer" ? 'border-b-2' : ""}`} onClick={() => setAction("printer")}>چاپگر</span>
        <span className={`cursor-pointer border-blue-800 pb-2 ${action == "storage" ? 'border-b-2' : ""}`} onClick={() => setAction("storage")}>انبار</span>
        <span className={`cursor-pointer border-blue-800 pb-2 ${action == "others" ? 'border-b-2' : ""}`} onClick={() => setAction("others")}>سایر</span>
      </div>

      {action == "global" ? <Global /> :
        action == "printer" ? <Printers /> :
          action == "storage" ? <Storage /> :
            action == "others" ? <Others /> : ""}
      <Button onClick={() => mutate(ctx!.data)} className='self-start '>
        <span>ذخیره</span>
      </Button>
    </div>
  )
}

export default Item