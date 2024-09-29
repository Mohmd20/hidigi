import { axiosInastance } from "./axiosConfig"

export const getDisplayStatus = async () => {
    return await axiosInastance.get(`/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/DisplayStatus`).then(r => r.data)
}