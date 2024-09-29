import { getDisplayStatus } from "@/services/getDisplayStatus"
import { UseMutationOptions, useQuery } from "@tanstack/react-query"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetDisplayStatus =  (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useQuery({
        queryFn:getDisplayStatus,
        queryKey:['displaystatus'],
        ...options
    })
}