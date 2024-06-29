"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonlogo from '../public/amazon-logo-2.webp'
import { BiCart } from 'react-icons/bi'
import { CgSearch } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/superbase/Hooks/redux'
import { getCart } from '@/redux/cartSlice'
import { superbase } from '@/lib/superbase/products'

const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Today's Deals",
    "Fashion",
    "Electronics",
    "Prime",
    "New Releases",
    "Home & Kitchen",
    "Amazon Pay",
    "Customer Service",
    "Computers"]

const Header = () => {

    const [query, setQuery] = useState<string>("")
    const [User, setUser] = useState<any>(null)
    const router = useRouter()

    const searchHandler = () => {
        router.push(`/search/${query}`)
    }

    const cart = useAppSelector(getCart);

    useEffect(() => {
        const getUserData = async () => {
            const { data: { user } } = await superbase.auth.getUser();
            setUser(user);
        }

        getUserData()

    }, [])

    console.log(User);



    return (
        <>
            <div className='bg-[#131921] text-white  '>
                <div className='flex items-center justify-between mx-auto w-[98%]'>
                    <div className='border border-transparent hover:border hover:border-white p-3'>
                        <Link href='/'>
                            <Image className='cursor-pointer'
                                src={amazonlogo} width={110} height={90} alt='logo' /></Link>
                    </div>
                    <div className='w-[85%] mx-auto px-5 flex items-center justify-center py-2  '>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='w-full mx-auto py-1 px-5 rounded-l-md text-black border-none'
                            type='text'
                            placeholder='Search Amazon.in' />
                        <div
                            onClick={searchHandler}
                            className='bg-[#FEB069] py-1 px-3 rounded-r-md cursor-pointer hover:bg-[#d1833b]'>

                            <CgSearch color='black' size='24px' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='cursor-pointer  p-2 border border-transparent hover:border hover:border-white'>
                            <Link href='/Signin'> <h1 className='text-xs hover:underline'>{`${User ? User.identities[0].identity_data.
                                user_name
                                : "Signin"}`}</h1></Link>
                            <h1 className='font-medium text-xs'>Account & Lists</h1>
                        </div>
                        <div className='cursor-pointer  p-2 border border-transparent hover:border hover:border-white'>
                            <p className='text-xs'>Returns</p>
                            <h1 className='font-medium text-xs' >& Orders</h1>
                        </div>
                        <Link href='/cart'>
                            <div
                                className='mt-[-5px] cursor-pointer  my-2 border border-transparent hover:border hover:border-white' >
                                <p className='relative top-3 left-3'>{cart.length}</p>
                                <div className='flex'>
                                    <div >
                                        <BiCart size={"30px"} />
                                    </div>
                                    <h1 className='mt-2'>cart</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-[#232F3E] text-white w-full  flex  items-center justify-between py-2 text-xs'>
                <div>
                    {
                        itemList.map((link, idx) => {
                            return (
                                <Link href={`/${link}`} key={idx} className='mx-1 border border-transparent hover:border hover:border-white p-2 '>{link}</Link>
                            )
                        })
                    }
                </div>
                <div className='mr-5 '>
                    <h2 onClick={async () => {
                        const { error } = await superbase.auth.signOut();
                        router.push("/Signin")
                    }} className='text-[#FEB069] font-bold cursor-pointer hover:underline'>Sign out</h2>
                </div>
            </div>
        </>
    )
}

export default Header