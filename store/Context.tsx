'use client'
import { data } from "@/app/branch/page";
import { createContext, useState } from "react";
type contextType = {
    data: data,
    setData: React.Dispatch<React.SetStateAction<data>>
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
    const contextValue = {
        data,
        setData
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
