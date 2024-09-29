export type data = {
    name: string,
    itemCode: string,
    description: string,
    touchAble: boolean,
    categoriesId: number,
    priority: number,
    parentId: number | null,
    preparationTime: number,
    mealType: 0 | 1 | 2 | 3,
    dailyInventory: number,
    fixDailyInventory: number,
    lable: 0 | 1 | 2 | 3,
    displayStatus: 0 | 1 | 2,
    status: 0 | 1,
    price: number,
    discountPrice: number,
    packagingCost: number,
    taxPercent: number,
    unitId: number,
    tags: string[],
    itemFiles:
    {
        fileName: string,
        fileType: number
    }[] | []
    ,
    weekdays: number[],
    barcodes: string[],
    itemPrinters:
    {
        serviceTypeId: number,
        printerId: number
    }[]

}