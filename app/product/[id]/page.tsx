"use client"
import SingleProducts from '@/components/SingleProducts'
import { useSuperbase } from '@/lib/superbase/Hooks/useSuperbase'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const ProductPage = () => {
    const { id } = useParams();
    const { singleProduct, getSingleProduct, } = useSuperbase()
    useEffect(() => {
        getSingleProduct(Number(id));
    }, [id,getSingleProduct])
    return (
        <div >
            <SingleProducts singleProduct={singleProduct} />
            
        </div>
    )
}

export default ProductPage
