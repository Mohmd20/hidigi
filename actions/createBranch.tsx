'use server'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createBranch = async (prevState: any, formData: FormData) => {
    const data = {
        name: formData.get('name') as string,
        itemCode: formData.get('itemCode') as string,
        description: formData.get('description') as string,
        touchAble: true,
        categoriesId: 0,
        priority: 0,
        parentId: 0,
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
            ''
        ],
        itemFiles: [
            {
                fileName: '',
                fileType: 0
            }
        ],
        weekdays: [
            0
        ],
        barcodes: [
            ''
        ],
        itemPrinters: [
            {
                serviceTypeId: 0,
                printerId: 0
            }
        ]
    }

    const res = await fetch("https://api.hidigimenu.com/Sale/v1/Item/hidigimenu/Create",{
        method:"POST",
        body:JSON.stringify(data),
        credentials:"include",
        headers:{
            Cookie:""
        }
    })
    console.log(res.json());
}