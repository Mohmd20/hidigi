import { axiosInastance } from "./axiosConfig"

export const getWeekDays = async () => {
    return await axiosInastance.get(`${process.env.NEXT_PUBLIC_APP_URL}/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/Weekdays`).then(r => r.data)
}