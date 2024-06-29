"use client"
import Image from 'next/image'
import React from 'react'
import amazon_logo from "../public/amazon-logo.png"
import { FaLock } from "react-icons/fa";
import { useAppSelector } from '@/lib/superbase/Hooks/redux';
import { getCart } from '@/redux/cartSlice';
import OrderSummary from './OrderSummary';

const Checkout = () => {
    const cart = useAppSelector(getCart)
    return (
        <div className='absolute top-0 bg-white py-10 w-full border-b  border-gray-400'>
            <div className=' border-b border-gray-400'>
                <div className='w-[70%]  mx-auto flex justify-between '>
                    <div className='py-3'>
                        <Image src={amazon_logo} alt='amazaon-logo' width={150} height={100} />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>CheckOut</h1>
                    </div>
                    <div className='text-gray-400'>
                        <FaLock size={"30px"} />
                    </div>
                </div>
            </div>
            <div className='flex w-[90%] justify-between mx-auto gap-20'>
                <div className='  mx-auto flex justify-between py-2 flex-col'>
                    <div className='flex justify-between  border-b border-gray-200 py-2'>
                        <h1 className='font-bold text-lg '>1. Delivery Address</h1>
                        <p className='text-sm'>Cecelia Havens <br />
                            456 White Finch St. <br />
                            North Augusta, SC 29860</p>
                    </div>
                    <div className='flex flex-col justify-between w-[50%] border-b border-gray-200 py-2'>
                        <div>
                            <h1 className='font-bold text-lg pt-2 pb-4'>2. Item and Delevery</h1>
                        </div>
                        <div>
                            {
                                cart.map((product: any) => {
                                    return (
                                        <div className='py-3 border-b border-gray-300'>
                                            <div className='flex gap-2'>
                                                <Image src={product.image} alt={product.title} width={100} height={100} />
                                                <div className='flex flex-col gap-2 ml-4'>
                                                    <h1>{product.title}</h1>
                                                    <p className='text-2xl font-bold'>{`$ ${product.price}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
                <div className='w-[27%]'>
                    <OrderSummary/>
                </div>
            </div>
        </div>
    )
}

export default Checkout