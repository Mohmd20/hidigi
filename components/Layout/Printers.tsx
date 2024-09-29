import { useGetPrinters } from '@/hook/query/useGetPrinters'
import { useGetServiceList } from '@/hook/query/useGetServiceList'
import { Context } from '@/store/Context'
import React, { useContext, useEffect } from 'react'
import DropDown from '../ui/DropDown'
type pagination = {
  pageCount: number 
  totalCount: number 
  pageIndex: number 
  itemsPerPage: number 
  sortBy: string 
  sortOrder: number 
}
type printersItems = {
  id: number 
  name: string 
  systemName: string 
  printerType: number 
  printCount: number 
  printerStatus: number 
  paperSize: number 
  lastUpdate: string 
  printerStatusDescription: string 
  paperSizeDescription: string 
  persianDateLastUpdate: string 
  printerTypeDescription: string
}[]
type servicesItems = {
  id: number 
  name: string 
  serviceType: number 
  status: number 
  lastUpdate: string 
  serviceTypeDescription: string 
  statusDescription: string 
  persianDateLastUpdate: string
}[]
type servicesResult = {
  items: servicesItems
} & pagination
type printersResult  = {
  items: printersItems
} & pagination
const Printers = () => {
  const ctx = useContext(Context)
  const { mutate, data: servicesList, isPending } = useGetServiceList({
    onSuccess: (data) => {
      ctx?.setData((d) => {
        return {
          ...d,
          itemPrinters: (data.result as printersResult).items.map((m) => ({
            printerId: 0,
            serviceTypeId: m.id,
          }))
        }
      })
    }
  });
  const { data: printers, mutate: mutatePrinters, isPending: isPendingPrinter } = useGetPrinters();
  useEffect(() => {
    mutate()
    mutatePrinters()
  }, [mutate, mutatePrinters])

  if (isPending || isPendingPrinter) {
    return <div>loading</div>
  }
  return (
    
      <div dir='rtl' className='flex flex-col gap-3 mr-10'>
        {servicesList && (servicesList.result as servicesResult).items.map((m, index) => {
          return (
            <div key={m.id} className='flex gap-12 items-center'>
              <span>{m.name}</span>
              <DropDown className='w-[80%]'  title='نوع پرینتر' onChange={(e) => ctx?.setData(d => {
                return {
                  ...d,
                  itemPrinters: [...d.itemPrinters].map((item, ind) => {
                    return index == ind ?
                      {
                        ...item,
                        printerId: parseInt(e.target.value)
                      } : item
                  })
                }
              })
              } name="" id="">
                {printers && (printers.result as printersResult).items.map(m => {
                  return (
                    <option key={m.name + m.id} value={m.id}>
                      {m.name}
                    </option>
                  )
                }
                )}
              </DropDown>
            </div>
          )
        })}
      </div>
   
  )
}

export default Printers