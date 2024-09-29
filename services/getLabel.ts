import { axiosInastance } from "./axiosConfig"

export const getLabel = async () => {
    return await axiosInastance.get(`/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/ShowLable`).then(r => r.data)
}