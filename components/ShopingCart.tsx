"use client"
import { clearAllFromCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/cartSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import SubTotal from './shared/SubTotal'

const ShopingCart = ({ cart, totalPrice }: { cart: any, totalPrice: number }) => {
    const dispatch = useDispatch()

    return (
        <div className=''>
            <div className='flex justify-between py-5 border-b border-gray-300'>
                <h1 className='text-2xl font-semibold '>Shopping Cart</h1>
                <h1>Price</h1>
            </div>
            {
                cart.map((product: any) => {
                    return (
                        <div key={product.id} className='p-4 border-b border-gray-300  flex justify-between'>
                            <div className='flex'>
                                <div>
                                    <Image src={product.image} width={100} height={100} alt={"productImage"} />
                                </div>
                                <div className='ml-4'>
                                    <h1 className=' font-medium'>{product.title}</h1>
                                    <p className='text-[#007600] text-sm '>In Stock</p>
                                    <h1 onClick={() => {
                                        dispatch(removeFromCart(product.id));
                                    }} className='text-red-700 font-bold text-base cursor-pointer'>REMOVE</h1>
                                    <div className='flex gap-3 text-lg bg-gray-200 rounded-md px-5 py-1 w-fit my-2'>
                                        <div
                                            onClick={() => {
                                                product.quantity > 1 && dispatch(decrementQuantity(product));
                                            }}
                                            className='cursor-pointer'>-</div>
                                        <div>{product.quantity}</div>
                                        <div onClick={() => {
                                            dispatch(incrementQuantity(product))
                                        }}
                                            className='cursor-pointer'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>{`$${product.price}`}</h1>
                                <p className='text-xs py-1 '>M.R.P.: <span className='line-through'>$3,9999.00</span></p>
                            </div>
                        </div>
                    )
                })
            }
            <h1 onClick={() => {
                dispatch(clearAllFromCart());
            }}
                className='text-red-700 font-bold cursor-pointer my-3'>CLEAR ALL</h1>
            <SubTotal length={cart.length} totalPrice={totalPrice} />

        </div>
    )
}

export default ShopingCart
