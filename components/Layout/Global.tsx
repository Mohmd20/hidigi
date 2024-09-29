'use client'
import React, { useContext, useState } from 'react'
import Label from '../ui/Label'
import Input from '../ui/Input'
import Categories from '../Categories'
import Units from '../Units'
import Status from '../Status'
import { Context } from '@/store/Context'
const Global = () => {
    const [barcodesTemp, setBarcodesTemp] = useState<string | null>(null)
    function handleBarcodes(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == "Enter") {
            ctx?.setData((d) => {
                return {
                    ...d,
                    barcodes: barcodesTemp ? [...d.barcodes, barcodesTemp] : [...d.barcodes]
                }
            })
            setBarcodesTemp(null)
        }
    }
    const ctx = useContext(Context)
    return (
        <div className='flex flex-col gap-5' dir='rtl'>
            <div className='flex gap-2'>
                <div className='flex flex-col gap-3 w-[30%]'>
                    <Label htmlFor='codeItem' text='کد آیتم' required />
                    <Input
                        onChange={(e) => {
                            ctx?.setData(d => {
                                return {
                                    ...d,
                                    itemCode: e.target.value
                                }
                            })
                        }}
                        theme='dark' placeholder='کد آیتم را وارد کنید' name='codeItem' />
                </div>
                <div className='flex flex-col gap-3 w-[70%]'>
                    <Label htmlFor='itemName' text='نام آیتم' required />
                    <Input
                        onChange={(e) => {
                            ctx?.setData(d => {
                                return {
                                    ...d,
                                    name: e.target.value
                                }
                            })
                        }}
                        theme='dark' name='itemName' placeholder='نام آیتم را وارد کنید' />
                </div>
            </div>
            <div className='flex gap-2'>
                <Categories />
                <Units />
            </div>
            <div className='flex gap-2'>
                <div className='flex flex-col gap-2 w-[25%]'>
                    <Label htmlFor='price' required text='قیمت محصول' />
                    <Input
                        onChange={(e) => {
                            ctx?.setDiscountData(d => {
                                const currentPrice = parseInt(e.target.value);
                                const discountPrice = d.discountPercent ? currentPrice * (d.discountPercent / 100) : d.discountPrice;
                                const priceAfterDiscount = currentPrice - discountPrice;
                                return {
                                    ...d,
                                    currentPrice: currentPrice,
                                    discountPrice: discountPrice,
                                    priceAfterDiscount: priceAfterDiscount
                                };
                            })
                        }}
                        theme='dark'
                        defaultValue={0}
                        name='price'
                    />
                </div>

                <div className='flex flex-col gap-2 w-[25%]'>
                    <Label text='مبلغ تخفیف' htmlFor='offprice' />
                    <Input
                        onChange={(e) => {
                            const discountPrice = parseInt(e.target.value);

                            if (ctx?.discountData?.currentPrice && (discountPrice > ctx?.discountData?.currentPrice)) {
                                alert('مبلغ تخفیف از قیمت محصول نباید بیشتر باشد ')
                                return
                            }
                            ctx?.setDiscountData(d => {
                                const discountPercent = d.currentPrice ? (discountPrice / d.currentPrice) * 100 : d.discountPercent;
                                const priceAfterDiscount = d.currentPrice - discountPrice;
                                return {
                                    ...d,
                                    discountPrice: discountPrice,
                                    discountPercent: discountPercent,
                                    priceAfterDiscount: priceAfterDiscount
                                };
                            })
                        }}
                        theme='dark'
                        value={ctx?.discountData.discountPrice || ''}
                        defaultValue={0}
                        name='offprice'
                    />
                </div>

                <div className='flex flex-col gap-2 w-[25%]'>
                    <Label text='درصد تخفیف' htmlFor='discountpercent' />
                    <Input
                        onChange={(e) => {

                            ctx?.setDiscountData(d => {
                                const discountPercent = parseInt(e.target.value);
                                const discountPrice = d.currentPrice ? (d.currentPrice * discountPercent) / 100 : d.discountPrice;
                                const priceAfterDiscount = d.currentPrice - discountPrice;

                                return {
                                    ...d,
                                    discountPrice: discountPrice,
                                    discountPercent: discountPercent,
                                    priceAfterDiscount: priceAfterDiscount
                                };
                            })
                        }}
                        theme='dark'
                        name='discountpercent'
                        value={ctx?.discountData.discountPercent || ''}
                    />
                </div>

                <div className='flex flex-col gap-2 w-[25%]'>
                    <Label text='قیمت بعد از تخفیف' htmlFor='afterdiscount' />
                    <Input
                        onChange={(e) => {
                            const priceAfterDiscount = parseInt(e.target.value);
                            if (ctx?.discountData.currentPrice && priceAfterDiscount > ctx?.discountData.currentPrice) {
                                alert('مبلغ بعد از تخفیف از قیمت محصول نباید بیشتر باشد ')
                                return
                            }
                            ctx?.setDiscountData(d => {
                                const discountPrice = d.currentPrice - priceAfterDiscount;
                                const discountPercent = d.currentPrice ? (discountPrice / d.currentPrice) * 100 : 0;
                                return {
                                    ...d,
                                    discountPrice,
                                    discountPercent,
                                    priceAfterDiscount
                                };
                            })
                        }}
                        theme='dark'
                        value={ctx?.discountData.priceAfterDiscount || ''}
                        defaultValue={0}
                        name='afterdiscount'
                    />
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 flex-col w-[50%]'>
                    <Label required text='هزینه بسته بندی:' htmlFor='packagecost' />
                    <Input
                        onChange={(e) => {
                            ctx?.setData(d => {
                                return {
                                    ...d,
                                    packagingCost: Number(e.target.value)
                                }
                            })
                        }}
                        theme='dark' name='packagecost' defaultValue={0} />
                </div>
                <div className='flex gap-2 flex-col w-[50%]'>
                    <Label required text='درصد مالیات:' htmlFor='mpercent' />
                    <Input
                        onChange={(e) => {
                            ctx?.setData(d => {
                                return {
                                    ...d,
                                    taxPercent: Number(e.target.value)
                                }
                            })
                        }}
                        theme='dark' name='mpercent' defaultValue={0} />
                </div>

            </div>
            <div className='flex gap-2'>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-wrap gap-3 '>
                        <Label text='بارکد' htmlFor='barcode' />
                        {ctx?.data.barcodes && ctx.data.barcodes.map((b,ind) => {
                            return (
                                <div className='text-[#2a79ef]' key={b+ind}>
                                    {b}
                                </div>
                            )
                        }) }
                    </div>
                    <Input
                        onChange={(e) => setBarcodesTemp(e.target.value)}
                        value={barcodesTemp || ''}
                        onKeyDown={(e) => handleBarcodes(e)}
                        placeholder='بارکد را وارد کنید و Enter  را بزنید' theme='light' name='barcode' className='bg-white ' />
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                <span>توضیحات</span>
                <textarea
                    onChange={(e) => {
                        ctx?.setData(d => {
                            return {
                                ...d,
                                description: e.target.value
                            }
                        })
                    }}
                    className='w-full focus:outline-none rounded-md p-3 bg-[#e1e0e0]' placeholder='توضیحات' />
            </div>
            <div className='flex gap-2'>
                <Status dataType='status' text='وضعیت' />
            </div>
        </div>
    )
}

export default Global