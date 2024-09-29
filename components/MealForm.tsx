import { useGetMeal } from '@/hook/query/useGetMeal'
import { Context } from '@/store/Context'
import React, { useContext } from 'react'
type mealsResult = {
    value: number
      content:string
}[]
const MealForm  = () => {
    const ctx = useContext(Context)

    const { data: meals, isLoading } = useGetMeal()
if(isLoading) {
    return <div>loading</div>
}
  return (
    <select onChange={(e) => ctx?.setData(d => {
        return {
            ...d,
            mealType: parseInt(e.target.value) as typeof d.mealType
        }
    })} name="" id="">
        {meals && (meals.result as mealsResult).map(m => {
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

export default MealForm