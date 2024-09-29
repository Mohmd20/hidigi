import { data } from '@/app/branch/page'
import { useGetLabel } from '@/hook/query/useGetLabel'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'
type lableResult = {
    value: number
    content: string
}[]
const Lable = () => {
    const ctx = useContext(Context)

    const { data: label, isLoading: isLoadingLabel } = useGetLabel()
    if (isLoadingLabel) {
        return <div>loading</div>
    }
    return (
        <select onChange={(e) => ctx?.setData(d => {
            return {
                ...d,
                lable: parseInt(e.target.value) as typeof d.lable
            }
        })} name="" id="">
            {label && (label.result as lableResult).map(m => {
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

export default Lable