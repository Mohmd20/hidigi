import { getPrinterList } from "@/services/getPrinterList"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGetPrinters = (options?: UseMutationOptions<any, Error, void, unknown>) => {
    return useMutation({
        mutationFn:getPrinterList,
        mutationKey:['printers'],
        ...options
    })
}