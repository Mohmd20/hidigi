import { getStatus } from "@/services/getStatus"
import { UseMutationOptions, useQuery } from "@tanstack/react-query"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetStatus= (options?: UseMutationOptions<any, Error, void, unknown>) => {
 return useQuery({
    queryFn:getStatus,
    queryKey:['status'],
    ...options
 })
}