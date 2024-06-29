import React from 'react';
import prime from "../public/prime-logo.png";
import Image from 'next/image';
import { useAppDispatch } from '@/lib/superbase/Hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

const AddToCartContainer = ({ product }: { product: any }) => {
    const route=useRouter();
    const dispatch = useAppDispatch();

    return (
        <div className='border border-gray-300 rounded-md h-fit flex flex-col justify-center items-center text-sm'>
            <div className='py-2'>
                <Image src={prime} width={50} height={50} alt='prime' />
            </div>
            <div className='p-4'>
                <h1>
                    <span className='text-[#217185]'>FREE delivery</span> Saturday, 29 June.
                    <span className='text-[#217185]'>Details</span>
                </h1>
                <h1 className='my-4'>
                    Or fastest delivery Tomorrow, 28 June. Order within 19 hrs 37 mins. Details
                </h1>
                <p className='text-[#217185]'>Delivering to Delhi 110001 - Update location</p>
                <button onClick={()=>{
                    dispatch(addToCart(product))
                    route.push("/cart")
                }} className='bg-[#F7CA00] w-full rounded-full py-2 m-2'>Add to Cart</button>
                <button className='bg-[#FFA41C] w-full rounded-full py-2 m-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default AddToCartContainer;
