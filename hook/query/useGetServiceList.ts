import { getServices } from "@/services/getServices"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetServiceList = (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useMutation({
        mutationFn:getServices,
        mutationKey:['servicelist'],
        ...options
    })
}