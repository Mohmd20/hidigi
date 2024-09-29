import { axiosInastance } from "./axiosConfig"

export const getCategories = async () => {
    const res = await axiosInastance.post("/Sale/v1/Category/hidigimenu/List",{
            totalCount: 0,
            pageIndex: 0,
            itemsPerPage: 0,
            items: "",
            sortBy: "id",
            sortOrder: 0
    })
    return res.data
}