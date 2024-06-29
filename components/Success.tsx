"use client"
import { useAppSelector } from '@/lib/superbase/Hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    const cart = useAppSelector(getCart)
    return (
        <div className='absolute  top-0 w-full bg-white py-10'>
            <div className='text-center '>
                <h1 className='font-bold text-2xl text-green-700'>Thank you for odering with Amazon.in</h1>
                <div className='w-[70%] mx-auto flex flex-col gap-10'>
                    <h1 className='underline'>Order Details</h1>
                    {
                        cart.map((product: any) => {
                            return (
                                <div key={product.id} className='flex gap-10 border border-gray-300 p-4'>
                                    <Image src={product.image} alt={product.title} width={70} height={70} />
                                    <div >
                                        <h1 className='text-left  text-lg font-semibold'>{product.title}</h1>
                                        <h1 className='text-left  text-lg font-bold'>{`$ ${product.price}`}</h1>
                                    </div>

                                </div>

                            )
                        })
                    }
                <div className='w-[20%] py-10'>
                    <Link href={'/'}><button className='bg-[#F7CA00] w-full rounded-md py-2 m-2'>Buy Now</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Success
