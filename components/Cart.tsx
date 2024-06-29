'use client'
import { useAppSelector } from '@/lib/superbase/Hooks/redux';
import { getCart } from '@/redux/cartSlice';
import ProccessedToBuy from './ProccessedToBuy';
import ShopingCart from './ShopingCart';

const Cart = () => {


  const cart = useAppSelector(getCart)

    let totalPrice=0;
    cart.forEach((item:any)=>{
        totalPrice+=item.price*item.quantity;
    })

  return (
    <div className='w-[90%] mx-auto'>
        <div className='flex justify-between gap-20'>
            <ShopingCart cart={cart} totalPrice={totalPrice}  />
            <ProccessedToBuy length={cart.length} totalPrice={totalPrice}/>
        </div>
    </div>
  )
}

export default Cart