import { getStatus } from "@/services/getStatus"
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetStatus= (options?: UndefinedInitialDataOptions<any, Error, any, string[]>) => {
 return useQuery({
    queryFn:getStatus,
    queryKey:['status'],
    ...options
 })
}