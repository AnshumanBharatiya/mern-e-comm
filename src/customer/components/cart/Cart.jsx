import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../state/Cart/Action'

function Cart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);  

    const handelCheckOut = () => {
      navigate(`/checkout?step=2`);
    }

    useEffect( () => {
        dispatch(getCart());
    },[cart.deleteCartItems, cart.updateCartItems])


    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative mt-10'>
                <div className=' col-span-2 space-y-7  '>
                    {cart.cart?.cartItem.map((item) => <CartItem cart_item={item} />)}        
                </div>
                <div className='sticky top-0 h-[80vh] mt-5 lg:mt-0 px-5 '>
                    <div className='border rounded-md p-4'>
                        <p className=' uppercase font-bold opacity-50 pb-4'>Price Details</p>
                            <hr/>
                        <div className=' font-semibold space-y-2 mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>&#8377;{cart.cart?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-600'>- &#8377;{cart.cart?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <hr/>
                            <div className='flex justify-between pt-3 text-black font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>&#8377;{cart.cart?.totalDiscountPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handelCheckOut} variant='contained' className='w-full mt-5' sx={{px:"2.5rem", py:".7rem", bgcolor:"#9155fd", mt:"1rem"}}>
                                checkout
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart