import { getUnits } from '@/services/getUnits'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetUnits = (options?: UseMutationOptions<any, Error, void, unknown>) => {
  return useMutation({
    mutationFn:getUnits,
    mutationKey:['units'],
    ...options

  })
}

export default useGetUnits