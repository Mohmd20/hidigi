import { axiosInastance } from "./axiosConfig"

export const getDisplayStatus = async () => {
    return await axiosInastance.get(`${process.env.NEXT_PUBLIC_APP_URL}/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/DisplayStatus`).then(r => r.data)
}