import { data } from '@/app/branch/page'
import { useGetStatus } from '@/hook/query/useGetStatus'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'

const Status = () => {
    const ctx = useContext(Context)

    const { data: status, isLoading: isLoadingStatus } = useGetStatus()
    if (isLoadingStatus) {
        return <div>loading</div>
    }
    return (
        <div className="flex">
            <span>{ctx?.data.status ? "فعال" : "غیر فعال"}</span>
            <input checked={status && status.value} type="checkbox" onChange={(e) => ctx?.setData(d => {
                return {
                    ...d,
                    status: e.target.checked ? 1 : 0
                }
            })} />
        </div>
    )
}

export default Status