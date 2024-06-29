
import Image from 'next/image'
import React, { useEffect } from 'react'
import Ratings from './shared/Ratings'
import AddToCardContainer from './AddToCardContainer'

const SingleProducts = ({ singleProduct }: { singleProduct: any }) => {


    return (
        <div className='w-[95%] mx-auto mt-10'>
            <div className='flex justify-between'>

                {
                    singleProduct.map((product: any) => {
                        return (
                            <div className='flex'>
                                <div className='flex justify-between'>
                                    <div className='bg-gray-100 flex justify-center items-center'>

                                        <Image className='mix-blend-multiply p-4' src={product.image} height={500} width={400} alt={product.title} />
                                    </div>
                                    <div className='w-[70%] mx-5'>
                                        <h1 className='font-medium  text-5xl'>{product.title}</h1>
                                        <p >{product.description}</p>
                                        <Ratings ratings={product.rating} />
                                        <h1 className='font-bold'>{`$${product.price}`}</h1>
                                        <div>
                                            <h1 className='font-bold text-base'>About this item...</h1>
                                            <li>Display: 6.67" FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; Corning Gorilla Glass 5 Display Protection</li>
                                            <li>Processor:Mediatek Dimensity 6080 6nm Octa-core 5G processor for high performance ; Up to 2.4GHz; Upto 12GB RAM including 6GB Virtual RAM</li>
                                            <li>Camera: 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='min-w-[15%]'>
                                    <AddToCardContainer product={product} />
                                </div>
                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}

export default SingleProducts
