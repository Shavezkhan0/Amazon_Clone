import React from 'react'
import axios from 'axios';
import { superbase } from '@/lib/superbase/products';
import { useAppSelector } from '@/lib/superbase/Hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummary = () => {

    const cart = useAppSelector(getCart)

    let totalPrice=0;
    cart.forEach((item:any)=>{
        totalPrice+=item.price*item.quantity;
    })


    const createStripeSession = async () => {

        const { data: { user } } = await superbase.auth.getUser();
        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/checkout-sessions", {
            item: cart,
            email: user?.email
        })

        console.log(checkoutSession);

        const result=await stripe?.redirectToCheckout({
            sessionId:checkoutSession.data.id,
        })

        if(result?.error){
            console.log(result.error.message)
        }

    }

    return (
        <div className='w-[90%] mx-auto my-4 border border-gray-400 h-fit p-5'>
            <div>
                <h1 className='font-bold text-lg'>Order Summary</h1>
                <div className='text-xs border-b border-gray-300 py-2'>
                    <div className='flex justify-between items-center'>
                        <p>Items</p>
                        <p>43645</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Delivery</p>
                        <p>43645</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Total:</p>
                        <p>436456</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Promotion Applied</p>
                        <p>43645</p>
                    </div>
                </div>
                <div className='flex justify-between items-center text-2xl font-bold border-b border-gray-300 py-2 text-red-700'>
                    <h1>Total Order</h1>
                    <h1>{`$${totalPrice}`}</h1>
                </div>
                <button onClick={createStripeSession} className='bg-[#F7CA00] w-full rounded-md py-2 m-2'>Place Your Order Know</button>
            </div>
        </div>
    )
}

export default OrderSummary
