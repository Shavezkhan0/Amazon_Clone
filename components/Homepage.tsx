'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSuperbase } from '../lib/superbase/Hooks/useSuperbase';
import Link from 'next/link';
import CategoryProduct from './shared/CategoryProduct';

const Homepage = () => {
  const { mensProduct,
    getmensProducts,
    womensProduct,
    getwomensProducts, } = useSuperbase()

  useEffect(() => {
    getmensProducts()
    getwomensProducts()
  },[mensProduct,womensProduct])


  return (
    <div>
      <Image style={{
        maskImage: 'linear-gradient(to bottom,rgba(0,0,0,1), rgba(0,0,0,0)'
      }}
        width={1500} height={800} alt='banner' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg"} />
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-4 relative -top-60'>
        {
          mensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <div >
                  <CategoryProduct product={product} />
                </div>
              </div>
            )
          })
        }
        {
          womensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <div >
                  <CategoryProduct product={product} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Homepage
