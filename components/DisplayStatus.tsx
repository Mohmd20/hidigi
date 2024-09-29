import { useGetDisplayStatus } from '@/hook/query/useGetDisplayStatus'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'
type displayStatusType = {
    value: number
    content: string
}[]
const DisplayStatus = () => {
    const ctx = useContext(Context)

    const { data: displayStatus, isLoading: isLoadingDisplayStatus } = useGetDisplayStatus()
if(isLoadingDisplayStatus) {
    return (
        <div>loading...</div>
    )
}
  return (
    <select onChange={(e) => ctx?.setData(d => {
        return {
            ...d,
            displayStatus: parseInt(e.target.value) as typeof d.displayStatus
        }
    })} name="" id="">
        { displayStatus && (displayStatus.result as displayStatusType).map((m) => {
            return (
                <option key={m.content + m.value} value={m.value}>
                    {m.content}
                </option>
            )
        }
        )}
    </select>
  )
}

export default DisplayStatus