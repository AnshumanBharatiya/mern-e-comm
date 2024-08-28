import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, update_PAYMENT_REQUEST } from "./ActionType"

export const createPayment = (orderId) => async (dispatch) => {
    dispatch({type : CREATE_PAYMENT_REQUEST});
    try{
        const { data } = await api.post(`/api/payments/${orderId}`, {});

        console.log(data);
        
        if(data.payment_Link_Url){
            window.location.href = data.payment_Link_Url;
        }
       
    }catch(error){
        dispatch({type:CREATE_PAYMENT_FAILURE, payload : error.message})
    }
}

export const updatePayment = (reqData) => async (dispatch) => {
    console.log('reqdata',reqData);
    
    dispatch({type : update_PAYMENT_REQUEST});
    try{
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

       console.log('update payment ', data);
       
    }catch(error){
        dispatch({type:CREATE_PAYMENT_FAILURE, payload : error.message})
    }
}