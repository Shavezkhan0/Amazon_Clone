import React from 'react'
import ProductCard from './ProductCard'

const SearchResulte = ({ filterData }: { filterData: any }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='mt-10'>
        <div>
          <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
          <p>Check each product page for other buying options.</p>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {
            filterData.map((product: any) => {
              return (
                <div key={product.id}>
                  <ProductCard  product={product} />
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default SearchResulte