import Image from 'next/image'
import Ratings from './Ratings'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cartSlice'

const CategoryProduct = ({ product }: { product: any }) => {
    const dispatch=useDispatch()
    return (
        <div className='border border-gray-300 p-3  flex flex-col gap-2 bg-white'>
            <h1 className='font-semibold text-left'>{product.category}</h1>
            <div className=' h-[250px] overflow-hidden flex justify-center items-center'>
                <Image className='px-4 py-8' src={product.image} width={200} height={150} alt={product.title} />
            </div>
            <div>
                <h1>{product.title}</h1>
                <Ratings ratings={product.rating} />
            </div>
            <div className='my-1'>
                <button onClick={()=>{
                    dispatch(addToCart(product))
                }}
                className='bg-[#F7CA00] w-full rounded-lg py-2 px-1'>Add to Cart</button>
            </div>
        </div>
    )
}

export default CategoryProduct
