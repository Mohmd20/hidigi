import React, { useContext, useState } from 'react'
import DropDown from '../ui/DropDown'
import { Context } from '@/store/Context'
import { useGetMeal } from '@/hook/query/useGetMeal'
import { mealsResult } from '@/types/mealsData'
import { useGetLabel } from '@/hook/query/useGetLabel'
import { lableResult } from '@/types/LabelResult'
import { useGetDisplayStatus } from '@/hook/query/useGetDisplayStatus'
import { displayStatusType } from '@/types/DisplayStatusResult'
import WeekDays from '../WeekDays'
import RangeInput from '../ui/RangeInput'
import Status from '../Status'
import Label from '../ui/Label'
import Input from '../ui/Input'
const Others = () => {
    const ctx = useContext(Context)
    const [tagTemp,setTagTemp] = useState<string | null>(null)
    const { data: meals, isLoading } = useGetMeal()
    const { data: label, isLoading: isLoadingLabel } = useGetLabel()
    const { data: displayStatus, isLoading: isLoadingDisplayStatus } = useGetDisplayStatus()
    function handleTags(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == "Enter") {
            ctx?.setData((d) => {
                return {
                    ...d,
                    tags: tagTemp ? [...d.tags, tagTemp] : [...d.tags]
                }
            })
            setTagTemp(null)
        }
    }
    if (isLoading || isLoadingDisplayStatus || isLoadingLabel) {
        return <div>loading...</div>
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-1' dir='rtl'>
                <DropDown 
                 onChange={(e) => {
                    ctx?.setData(d => {
                        return {
                            ...d,
                            lable:Number(e.target.value) as typeof d.lable
                        }
                    })
                }}
                className='w-[33%]' title='برچسب'>
                    {label && (label.result as lableResult).map(m => {
                        return (
                            <option key={m.content + m.value} value={m.value}>
                                {m.content}
                            </option>
                        )
                    }
                    )}
                </DropDown>
                <DropDown className='w-[33%]' 
                 onChange={(e) => {
                    ctx?.setData(d => {
                        return {
                            ...d,
                            displayStatus:Number(e.target.value) as typeof d.displayStatus
                        }
                    })
                }}
                title='وضعیت نمایش'>
                    {displayStatus && (displayStatus.result as displayStatusType).map((m) => {
                        return (
                            <option key={m.content + m.value} value={m.value}>
                                {m.content}
                            </option>
                        )
                    }
                    )}
                </DropDown>
                <DropDown 
                 onChange={(e) => {
                    ctx?.setData(d => {
                        return {
                            ...d,
                            mealType:Number(e.target.value) as typeof d.mealType
                        }
                    })
                }}
                className='w-[33%]' title='وعده غذایی'>
                    {meals && (meals.result as mealsResult).map(m => {
                        return (
                            <option key={m.content + m.value} value={m.value}>
                                {m.content}
                            </option>
                        )
                    }
                    )}
                </DropDown>
            </div>

            <WeekDays />

            <div dir='rtl' className='flex gap-2'>
                <div className='gap-4 flex flex-col w-[50%]'>
                    <span>اولویت</span>
                    <RangeInput 
                     onChange={(e) => {
                        ctx?.setData(d => {
                            return {
                                ...d,
                                priority:Number(e.target.value)
                            }
                        })
                    }}
                    />
                </div>
                <div className='gap-4 flex flex-col w-[50%]'>
                    <span>مدت زمان آماده سازی </span>
                    <RangeInput 
                     onChange={(e) => {
                        ctx?.setData(d => {
                            return {
                                ...d,
                                preparationTime:Number(e.target.value)
                            }
                        })
                    }}
                    />
                </div>
            </div>
                <div className='flex gap-2'>
                    <Status  dataType='touch' text='نمایش در فروش به صورت دکمه' />
                </div>
                
                <div className='flex flex-col gap-2 w-full'>
                    <div dir='rtl' className='flex flex-wrap gap-3 '>
                        <Label text='تگ ها' htmlFor='tags' />
                        {ctx?.data.barcodes && ctx.data.tags.map((b,ind) => {
                            return (
                                <div className='text-[#2a79ef]' key={b+ind}>
                                    {b}
                                </div>
                            )
                        }) }
                    </div>
                    <Input
                      dir='rtl'
                        onChange={(e) => setTagTemp(e.target.value)}
                        value={tagTemp || ''}
                        onKeyDown={(e) => handleTags(e)}
                        placeholder='بارکد را وارد کنید و Enter  را بزنید' theme='light' name='tags' className='bg-white ' />
                </div>
            
        </div>
    )
}

export default Others