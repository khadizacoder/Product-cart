import React, { useEffect, useState } from 'react'
import { Product } from './Product';
import { addStoreCart, getStoreCart, removeStoreCart } from '../utilities/LocalStorage';

export const Products = ({ products }) => {

    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storeCartId = getStoreCart();

        const storeProducts = [];

        for (const id of storeCartId) {
            // console.log(id)
            const cartProduct = products.find(product => product.id === id);
            if (cartProduct) {
                storeProducts.push(cartProduct);
            }
        }
        setCart(storeProducts);

    }, [products]);

    const addCart = (product) => {
        const updateCart = [...cart, product];
        setCart(updateCart);

        // Save to localStorage
        addStoreCart(product.id);
    }

    const removeCart = (id) => {

        const updateRemoveCart = cart.filter(products => products.id !== id);
        setCart(updateRemoveCart);
        // console.log('remove', id)
        removeStoreCart(id);
    }

    return (
        <div className='max-w-screen-lg mx-auto p-5'>
            <h1 className='font-bold text-2xl mb-5'>Simple Product List</h1>
            <div className='mb-5'>
                {
                    cart.length === 0 ? <p className='font-bold text-lg'>Your cart is empty</p> :
                        <>
                            <h2 className='font-bold text-lg'>Total add to cart: {cart.length} </h2>
                            <div className='flex items-center gap-3 flex-wrap my-3'>
                                {
                                    cart.map((item, index) => (
                                        <div key={index}>
                                            <div className='gap-3 mb-2 relative border-gray-200 rounded shadow-lg'
                                            >
                                                <img
                                                    className='w-20 h-20 object-cover'
                                                    src={item.image} alt={item.name} />
                                                <p className='text-gray-600 text-sm'>Price: ${item.price}</p>
                                                <button onClick={() => removeCart(item.id)} className=' absolute top-0 right-2 font-bold text-red-600 cursor-pointer'>X</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product addCart={addCart} key={product.id} product={product} />)
                }
            </div>

        </div>
    )
};