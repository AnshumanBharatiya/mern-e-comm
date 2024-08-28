import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from '../../../state/Payment/Action'
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../order/OrderTracker";
import AddressCard from "../addresscard/AddressCard";

function PaymentSuccess() {
    const [paymentStatus,setPaymentStatus ] = useState();
    // const [referenceId,setReferenceId ] = useState();
    const [paymentId,setPaymentId ] = useState();

    const {orderId} = useParams();

    const dispatch = useDispatch();
    const {order} = useSelector(store => store)

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"));
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"));

        // // http://localhost:3000/payment/66c8d23fa71176dbc476e3d3?razorpay_payment_id=pay_Oq1VywnfWaSz60&razorpay_payment_link_id=plink_Oq1UQZCVHajvyH&razorpay_payment_link_reference_id=&razorpay_payment_link_status=paid&razorpay_signature=ca41818acbd7ccf3df34f3c3d3a80f6570d1a7516c328fa83419751296c4531d
    },[])
    
    useEffect(() => {
        if(paymentId){
            const data = {orderId, paymentId}
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data));
        }   
    },[orderId,paymentId])


    return (
        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center">
                <Alert variant="filled" severity="success" sx={{mb:6, width:"fit-content"}}>
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>
            </div>

            <OrderTracker activeStep={1}/>

            <Grid container className="space-y-5 py-10 pt-20">
            {order.order?.orderItems.map((item) => (
                <Grid container item className="border shadow-xl rounded-md p-5 mb-9" sx={{alignItems:"center", justifyContent:"space-between"}}>
                    <Grid item xs={6}>
                        <div className="flex items-center">
                            <img className="w-[5rem] h-[7rem] object-cober object-top " src={item.product.imageUrl} alt=""/>
                            <div className="ml-5 space-y-2">
                                <p>{item.product.title}</p>
                                <div className="opacity-50 text-xs font-semibold space-x-5"><span>Color: {item.product.color} 
                                </span><span> Size: {item.size} </span></div>
                                <p>Seller : {item.product.brand}</p>
                                <p>₹ {item.price}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <AddressCard address={order.order?.shippingAddress} />
                    </Grid>
                </Grid>
            ))}
            </Grid>

        </div>
    )
}

export default PaymentSuccess