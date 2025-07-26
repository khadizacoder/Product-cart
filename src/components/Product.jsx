import React from 'react'

export const Product = ({product, addCart}) => {
  return (
    <div className='border-gray-200 p-4 rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-200 transition-all ease-in-out hover:ring-1 ring-sky-700'>
        <img src={product.image} alt={product.name} className='w-full h-60 object-cover' />
        <h2 className='font-bold text-lg mt-2'>{product.name}</h2>
        <p className='text-gray-600'>{product.description}</p>
        <button onClick={() => addCart(product)} className='py-2 px-4 bg-sky-800 hover:bg-sky-800 text-white rounded cursor-pointer mt-2'>Add To Cart</button>
    </div>
  )
}
