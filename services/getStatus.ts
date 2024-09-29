import { axiosInastance } from "./axiosConfig"

export const getStatus = async () => {
    return await axiosInastance.get(`/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/ItemStatus`).then(r => r.data)
}