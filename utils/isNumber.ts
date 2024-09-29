// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(item: any){
    return item !== '[^0-9]' ? false : true
}