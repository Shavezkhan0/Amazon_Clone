import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }: { product: any }) => {
    const route = useRouter()
    return (
        <div onClick={() => {
route.push(`/product/${product.id}`)
        }}>
            <div className='cursor-pointer '>
                <div className='bg-gray-100 h-fit flex items-center  justify-center rounded-md overflow-hidden'>
                    <Image className='mix-blend-multiply object-contain block p-4' src={product.image} alt={product.title} width={180} height={250} objectFit='contain' />
                </div>
                <h1 className='font-bold'>{product.title}</h1>
                <p className='text-sm'>{`${product.description.substring(0, 50)}...`}</p>
                <Ratings ratings={product.rating} />
                <p className='font-bold text-2xl'>{`$${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard