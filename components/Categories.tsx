import { useGetCategory } from '@/hook/query/useGetCategory'
import { Context } from '@/store/Context'
import React, { useContext, useEffect } from 'react'
import DropDown from './ui/DropDown'
type categoryResultType = {
    menusId: null
    pageCount: number
    totalCount: number
    pageIndex: number
    itemsPerPage: number
    items:{
        id: number
        name: string
        priority: 0
        parentName: null
        fileName: string
        status: number
        menusName: null
        statusDescription: string
        lastUpdate: string
        persianDateLastUpdate:string
    }[]
}
const Categories = () => {
    const ctx = useContext(Context)
    const {data:categories,mutate:mutateCategories,isPending:isLoadingCategories} = useGetCategory()
    useEffect(()=> {
        mutateCategories()
    },[mutateCategories])
    if(isLoadingCategories){
        return <div>loading</div>
    }
  return (
    <DropDown className='w-[50%]' title='دسته بندی' required onChange={(e) => ctx?.setData(d => {
        return {
            ...d,
            categoriesId: parseInt(e.target.value)
        }
    })} name="" id="">
        {categories && (categories.result as categoryResultType).items.map(m => {
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

export default Categories