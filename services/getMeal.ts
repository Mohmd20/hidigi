import { axiosInastance } from "./axiosConfig"


export  const  getMeal = async() => {
    const res = await axiosInastance.get(`${process.env.NEXT_PUBLIC_APP_URL}/Sale/v${process.env.NEXT_PUBLIC_VERSION}/Item/${process.env.NEXT_PUBLIC_BRANCH_NAME}/MealType`)
    return res.data
}