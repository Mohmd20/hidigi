import { useGetWeekDays } from '@/hook/query/useGetWeekDays'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'

type weekDaysReslut = {
    value: number,
      content: string
}[]
const WeekDays = () => {
    const ctx = useContext(Context)

    const { data: weekDays, isLoading: isLoadingWeekDays } = useGetWeekDays()
  if(isLoadingWeekDays){
    return <div>loading</div>
  }
    return (
    <div className='flex gap-3' dir='rtl'>

        {weekDays && (weekDays.result as weekDaysReslut).map((m) => {
            return (
                <div dir='ltr' key={m.value} className='flex gap-2 p-2 px-3 rounded-md bg-[#e0e0e0] items-center justify-center'>
                    <span>{m.content}</span>
                    <input 
                    onChange={(e) => {
                       
                        ctx?.setData(d => {
                            return e.target.checked ? {
                                ...d,
                                weekdays: [...d.weekdays,m.value as number]
                            } : 
                                 {
                                    ...d,
                                    weekdays: d.weekdays.filter((d) => d != m.value )
                                }
                            
                        }) 
                    }} type="checkbox" name="" id="" />
                </div>
            )
        }
        )}
    </div>
    
  )
}

export default WeekDays