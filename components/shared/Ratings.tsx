import React from 'react';
import rating from "../../public/star-icon.png";
import Image from 'next/image';

interface RatingType {
  count: number;
}

interface RatingsProps {
  ratings: string;
}

const Ratings = ({ ratings }: RatingsProps) => {
  let parsedRatings: RatingType;
  
  try {
    parsedRatings = JSON.parse(ratings);
  } catch (e) {
    console.error("Invalid JSON for ratings", e);
    parsedRatings = { count: 0 }; // Fallback value
  }

  return (
    <div className='flex items-center'>
      {Array(4).fill(1).map((_, index) => (
        <Image key={index} src={rating} width={20} height={20} alt='rating' />
      ))}
      <h1 className='text-[#73C2EB] hover:text-[#f26a5b] ml-2 font-medium'>
        {parsedRatings.count} rating
      </h1>
    </div>
  );
};

export default Ratings;
