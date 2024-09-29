import { getCategories } from "@/services/getCategories"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetCategory = (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useMutation({
        mutationFn:getCategories,
        mutationKey:["category"],
        ...options
    })
}