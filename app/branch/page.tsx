'use client'
import { useMutation } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { axiosInastance } from '@/services/axiosConfig'
import Cookies from "js-cookie"
import MealForm from '@/components/MealForm'
import Status from '@/components/Status'
import Lable from '@/components/Lable'
import WeekDays from '@/components/WeekDays'
import Categories from '@/components/Categories'
import Interseptor from '@/components/Interseptor'
import { Context } from '@/store/Context'
import Units from '@/components/Units'
import { useRouter } from 'next/navigation'
export type data = {
    name: string,
    itemCode: string,
    description: string,
    touchAble: true,
    categoriesId: number,
    priority: number,
    parentId: number | null,
    preparationTime: number,
    mealType: 0 | 1 | 2 | 3,
    dailyInventory: number,
    fixDailyInventory: number,
    lable: 0 | 1 | 2 | 3,
    displayStatus: 0 | 1 | 2,
    status: 0 | 1,
    price: number,
    discountPrice: number,
    packagingCost: number,
    taxPercent: number,
    unitId: number,
    tags: string[],
    itemFiles:
    {
        fileName: string,
        fileType: number
    }[] | []
    ,
    weekdays: number[],
    barcodes: string[],
    itemPrinters:
    {
        serviceTypeId: number,
        printerId: number
    }[]

}


const Branch = () => {
    const [barcodesTemp, setBarcodesTemp] = useState<string | null>(null)
    const [tagsTemp, setTagsTemp] = useState<string | null>(null)
    const ctx = useContext(Context)
    const router = useRouter()
    if(!Cookies.get("auth")){
        router.push("/login")
    }
   function handlePeriorty(e: React.ChangeEvent<HTMLInputElement>) {
        ctx?.setData(d => {
            return {
                ...d,
                priority: Number(e.target.value)
            }
        })

    } 
     function handleBarcodes(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == "Enter") {
            ctx?.setData((d) => {
                return {
                    ...d,
                    barcodes: barcodesTemp ? [...d.barcodes, barcodesTemp] : [...d.barcodes]
                }
            })
            setBarcodesTemp(null)
        }
    } 
     function handleTags(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == "Enter") {
            ctx?.setData((d) => {
                return {
                    ...d,
                    tags: tagsTemp ? [...d.tags, tagsTemp] : [...d.tags]
                }
            })
            setTagsTemp(null)
        }
    } 
    console.log("barcode", barcodesTemp);
    async function send(data: data) {
        const res = await axiosInastance.post("https://api.hidigimenu.com/Sale/v1/Item/hidigimenu/Create", data, {
        })
        return res.data
    }
    const { mutate } = useMutation({ mutationFn: send, mutationKey: ["ss"] })
    return (
        <div className='flex flex-col gap-3 items-center mt-7'>
            <label htmlFor='name'>name</label>
            <input name="name" type="text" onChange={(e) => ctx?.setData(d => { return { ...d, name: e.target.value } })} className='border-2 ' />
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4'>{ctx?.data.barcodes.map((m,index) => <span key={m+index}>{m}</span>)}</div>
                <label htmlFor='barcode'>barcode</label>
                <input name="barcode" value={barcodesTemp ? barcodesTemp : ""} type="text" onKeyDown={(e) => handleBarcodes(e)} 
                onChange={(e) => {
                    if(isNaN(Number(e.target.value))){
                         alert("enter valid num")
                         return
                    } 
                    setBarcodesTemp(e.target.value)
                    }}  className='border-2 ' />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4'>{ctx?.data.tags.map((m,index) => <span key={m+index}>{m}</span>)}</div>
                <label htmlFor='tags'>tags</label>
                <input name="tags" value={tagsTemp ? tagsTemp : ""} type="text" onKeyDown={(e) => handleTags(e)} 
                onChange={(e) => {
                    setTagsTemp(e.target.value)
                    }}  className='border-2 ' />
            </div>
                
            <label htmlFor='itemCode'>itemCode</label>
            <input name="itemCode" type="text" onChange={(e) => ctx?.setData(d => { return { ...d, itemCode: e.target.value } })} className='border-2 ' />
            <label htmlFor='descript'>descript</label>
            <input name="description" onChange={(e) => ctx?.setData(d => { return { ...d, description: e.target.value } })} type="text" className='border-2 ' />
            <label htmlFor='price'>price</label>
            <input name="price" onChange={(e) => ctx?.setData(d => { return { ...d, price: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <label htmlFor='dis'>discounted</label>
            <input name="dis" onChange={(e) => ctx?.setData(d => { return { ...d, discountPrice: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <label htmlFor='pc'>packaging cost</label>
            <input name="pc" onChange={(e) => ctx?.setData(d => { return { ...d, packagingCost: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <label htmlFor='tax'>tax percent</label>
            <input name="tax" onChange={(e) => ctx?.setData(d => { return { ...d, taxPercent: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <Units/>
            <label htmlFor='fix'>fix daily</label>
            <input name="fix" onChange={(e) => ctx?.setData(d => { return { ...d, fixDailyInventory: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <label htmlFor='daily'>daily</label>
            <input name="daily" onChange={(e) => ctx?.setData(d => { return { ...d, dailyInventory: parseInt(e.target.value) } })} type="text" className='border-2 ' />
            <div className='flex flex-col gap-6'>
                <label htmlFor='periority'>per</label>
                <input name="description" onChange={(e) => handlePeriorty(e)}  min={0} max={100} type="range" className='border-2 ' />
                <div className='flex justify-between'>
                    <span>0</span>
                    <span>{ctx?.data.priority}</span>
                    <span>100</span>
                </div>
                <MealForm />
                <WeekDays />   
                <div>
                    <span>catgoryid : {ctx?.data.categoriesId}</span>
                </div>
                <Categories />
              
                <Status   />
                <Lable />
                <Interseptor />

            </div>
            <button onClick={() => mutate(ctx!.data)} className='bg-green-500 p-4 text-white rounded-md'>create</button>
        </div>
    )
}

export default Branch