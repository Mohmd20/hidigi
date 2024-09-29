import { getWeekDays } from "@/services/getWeekDays"
import { UseMutationOptions, useQuery } from "@tanstack/react-query"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetWeekDays =  (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useQuery({
        queryFn:getWeekDays,
        queryKey:['weekdays'],
        ...options
    })
}
