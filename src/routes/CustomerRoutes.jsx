import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../customer/pages/Home'
import Cart from '../customer/components/cart/Cart'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/productdetails/ProductDetails'
import Navigations from '../customer/components/navigation/Navigations'
import Footer from '../customer/components/footer/Footer'
import CheckOut from '../customer/components/checkout/CheckOut';
import Order from '../customer/components/order/Order';
import OrderDetails from '../customer/components/order/OrderDetails';

function CustomerRoutes() {
  return (
    <div>
        <div>
            <Navigations/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes