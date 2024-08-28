import React, { useEffect } from "react";
import AddressCard from "../addresscard/AddressCard";
// import Cart from '../cart/Cart'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { Button } from "@mui/material";
import CartItem from "../cart/CartItem";
import { createPayment } from "../../../state/Payment/Action";

function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handelCheckOut = () => {

    dispatch(createPayment(orderId))
  };

  return (
    <div>
      <div className="p-5 shadow-md rounded-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      {/* <Cart/> */}
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-10">
        <div className=" col-span-2 space-y-7  ">
          {order.order?.orderItems.map((item) => (
            <CartItem cart_item={item} />
          ))}
        </div>
        <div className="sticky top-0 h-[80vh] mt-5 lg:mt-0 px-5 ">
          <div className="border rounded-md p-4">
            <p className=" uppercase font-bold opacity-50 pb-4">
              Price Details
            </p>
            <hr />
            <div className=" font-semibold space-y-2 mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>&#8377;{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">
                  - &#8377;{order.order?.discounte}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  &#8377;{order.order?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handelCheckOut}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd", mt: "1rem" }}
            >
              checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
