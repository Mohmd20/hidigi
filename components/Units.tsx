'use client'
import useGetUnits from '@/hook/query/useGetUnits'
import { Context } from '@/store/Context'
import React, { useContext, useEffect } from 'react'
import DropDown from './ui/DropDown'
type unitsItems = {
    pageCount: number
    totalCount: number
    pageIndex: number
    itemsPerPage: number
    sortBy: string
    sortOrder: number
    id: number
    name: string
    code: null
    status: number
    lastUpdate: string
    statusDescription: string
    persianDateLastUpdate: string
}[]
type unitsResult = {
    pageCount: number
    totalCount: number
    pageIndex: number
    itemsPerPage: number
    sortBy: string
    sortOrder: number
    items: unitsItems
}
const Units = () => {
    const { mutate: mutateUnit, data: Units } = useGetUnits()
    const ctx = useContext(Context)
    useEffect(() => {
        mutateUnit()
    }, [mutateUnit])
    return (
        <DropDown className='w-[50%]' title='واحد' required onChange={(e) => ctx?.setData(d => {
            return {
                ...d,
                unitId: parseInt(e.target.value)
            }
        })} name="" id="">
            {Units && (Units.result as unitsResult).items.map(m => {
                return (
                    <option key={m.name + m.id} value={m.id}>
                        {m.name}
                    </option>
                )
            }
            )}
        </DropDown>
    )
}

export default Units