import React from 'react'
import SubTotal from './shared/SubTotal'
import { useRouter } from 'next/navigation'

const ProccessedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
  const router=useRouter()
  return (
    <div className='w-[25%] h-fit border border-gray-300 m-3 p-5  mx-auto '>
      <div className='p-1'>
        <p><div className='text-[#007600]'>Your Order is eligible for FREE Delivery .</div> Chose free Delivery options at checkout</p>
        <SubTotal length={length} totalPrice={totalPrice} />

        <button  onClick={()=>{
          router.push("/Checkout")
        }}
        className='bg-[#F7CA00] w-full rounded-md py-2 m-2'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProccessedToBuy