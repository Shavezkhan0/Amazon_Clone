"use client"
import SingleProducts from '@/components/SingleProducts'
import { useSuperbase } from '@/lib/superbase/Hooks/useSuperbase'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    const { id } = useParams();
    const { singleProduct, getSingleProduct, } = useSuperbase()
    useEffect(() => {
        getSingleProduct(Number(id));
    }, [])
    return (
        <div >
            <SingleProducts singleProduct={singleProduct} />
            
        </div>
    )
}

export default page
