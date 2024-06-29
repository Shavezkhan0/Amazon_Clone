import React from 'react'
import rating from "../../public/star-icon.png"
import Image from 'next/image'

const Ratings = ({ratings}:{ratings:string}) => {
    ratings=JSON.parse(ratings);
    return (
        <div className='flex items-center'>
            {

                Array(4).fill(1).map((dummyItem) => <Image src={rating} width={20} height={20} alt='rating' />)
            }
            <h1 className='text-[#73C2EB] hover:text-[#f26a5b] ml-2 font-medium'> {ratings.count} rating</h1>
        </div>
    )
}

export default Ratings