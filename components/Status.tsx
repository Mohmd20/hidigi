/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetStatus } from '@/hook/query/useGetStatus'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'
import Loading from './ui/Loading'
type StatusType = {
    text: string,
    dataType: string,

} 

const Status: React.FC<StatusType> = ({ text, dataType }) => {
    const ctx = useContext(Context)
    const { data: status, isLoading: isLoadingStatus } = useGetStatus({ queryKey: ['status'], enabled: dataType == "status" })
    if (isLoadingStatus) {
        return <Loading/>
    }
    return (
        <div dir='rtl' className="flex items-center p-4 border-[.1px] rounded-md justify-between w-full">
            <span>{text}</span>
            <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                    checked={status && status.value} onChange={(e) => ctx?.setData(d => {
                        if (dataType == " touch") {
                            return {
                                ...d,
                                touchAble: e.target.checked 
                            }
                        }
                        return dataType == "status" ? {
                            ...d,
                            status: e.target.checked ? 1 : 0
                        } : d
                    })} type="checkbox" id="toggle" className="sr-only peer" />
                <div className="w-12 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-[#8c8c8c] peer-checked:bg-[#3548c1] transition-colors duration-500"></div>
                <span className="absolute right-0 w-7 h-7 bg-white rounded-full transition-transform duration-500 border-[.2px] peer-checked:translate-x-[-1.5rem] peer-checked:border-[#3548c1]"></span>
            </label>
        </div>

    )
}

export default Status