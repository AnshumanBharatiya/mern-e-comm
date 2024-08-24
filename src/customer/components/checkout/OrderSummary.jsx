import React, { useEffect } from 'react'
import AddressCard from '../addresscard/AddressCard'
import Cart from '../cart/Cart'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from '../../../state/Order/Action';

function OrderSummary() {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const {order} = useSelector(store=>store)

  useEffect(() => {
    dispatch(getOrderById(orderId))
  },[orderId])

  return (
    <div>
        <div className='p-5 shadow-md rounded-md border'>
            <AddressCard address={order.order?.shippingAddress} />
        </div>
       <Cart/>
    </div>
  )
}

export default OrderSummary