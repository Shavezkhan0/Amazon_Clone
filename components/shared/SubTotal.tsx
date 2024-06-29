import React from 'react'

const SubTotal = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    return (
        <div>
            <h1 className='text-right pt-3 pb-5'>{`Subtotal ( ${length} items ) `} <span className='font-bold'>{`$ ${totalPrice}`}</span></h1>
        </div>
    )
}

export default SubTotal