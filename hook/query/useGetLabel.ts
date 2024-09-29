import { getLabel } from "@/services/getLabel"
import { UseMutationOptions, useQuery } from "@tanstack/react-query"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetLabel= (options?: UseMutationOptions<any, Error, void, unknown>) => {
 return useQuery({
    queryFn:getLabel,
    queryKey:['label'],
    ...options
 })
}