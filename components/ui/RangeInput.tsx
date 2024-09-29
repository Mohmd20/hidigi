import React, { ComponentPropsWithoutRef } from 'react'
type RangeInput = {
  className?:string,
} & ComponentPropsWithoutRef<'input'>
const RangeInput: React.FC<RangeInput> = ({className}) => {
  return (
    <input className={`${className}`} dir='rtl' defaultValue={0} min={0} max={100} type="range" name="" id="" />
  )
}

export default RangeInput