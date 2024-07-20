import React from 'react'
import AddressCard from '../addresscard/AddressCard'
import Cart from '../cart/Cart'

function OrderSummary() {
  return (
    <div>
        <div className='p-5 shadow-md rounded-md border'>
            <AddressCard />
        </div>
       <Cart/>
    </div>
  )
}

export default OrderSummary