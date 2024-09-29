import { getMeal } from "@/services/getMeal"
import { UseMutationOptions, useQuery } from "@tanstack/react-query"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetMeal = (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useQuery({
        queryKey:['meal'],
        queryFn: getMeal,
        ...options
    })
}