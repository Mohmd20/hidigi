'use client'
import { data } from "@/app/branch/page";
import { createContext, useEffect, useState } from "react";

type discountData = {
    discountPercent:number
        discountPrice:number
        currentPrice:number
        priceAfterDiscount:number   
}
export type contextType = {
    data: data
    setData: React.Dispatch<React.SetStateAction<data>>
    discountData:discountData
    setDiscountData: React.Dispatch<React.SetStateAction<discountData>>
}
export const Context = createContext<contextType | null>(null)
export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<data>({
        name: "",
        itemCode: "",
        description: "",
        touchAble: true,
        categoriesId: 0,
        priority: 0,
        parentId: null,
        preparationTime: 0,
        mealType: 0,
        dailyInventory: 0,
        fixDailyInventory: 0,
        lable: 0,
        displayStatus: 0,
        status: 0,
        price: 0,
        discountPrice: 0,
        packagingCost: 0,
        taxPercent: 0,
        unitId: 0,
        tags: [
            
        ],
        itemFiles: [],
        weekdays: [
            
        ],
        barcodes: [
            
        ],
        itemPrinters: [
            {
                serviceTypeId: 0,
                printerId: 0
            }
        ]
    })
    const [discountData,setDiscountData] = useState({
        discountPercent:0,
        discountPrice:0,
        currentPrice:0,
        priceAfterDiscount:0
    })
    useEffect(()=>{
        setData(d => {
            return {
                ...d,
                discountPrice: discountData.discountPrice,
                price: discountData.priceAfterDiscount ?? discountData.currentPrice,
            }
        })
    },[discountData.currentPrice, discountData.discountPrice, discountData.priceAfterDiscount])
    const contextValue = {
        data,
        discountData,
        setDiscountData,
        setData
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
