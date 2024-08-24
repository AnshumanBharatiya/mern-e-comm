import { api } from "../../config/apiConfig"
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE } from "./ActionType"


export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data} = await api.post(`/api/orders/`, reqData.address);

        
        
        if(data._id){
            reqData.navigate({ search : `step=3&order_id=${data._id}` });
        }
        
        dispatch({type:CREATE_ORDER_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE, payload : error.message})
    }
}


export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/orders/${orderId}`);

        console.log(data);
        
        dispatch({type:GET_ORDER_BY_ID_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE, payload : error.message})
    }
}


export const getOrderHistory = (reqData) => async (dispatch, getState) => {
    dispatch({type:GET_ORDER_HISTORY_REQUEST})
    try {
        // const config = {
        //     header: {
        //         "Authorization" : `Bearer ${reqData.jwt}`
        //     }
        // }
        const {data} = await api.get(`/api/orders/user`);
        dispatch({type:GET_ORDER_HISTORY_SUCCESS, payload:data})
        
    } catch (error) {
        // dispatch({type:GET_ORDER_HISTORY_FAILURE, payload : error.response && error.response.data.message ? error.response.data.message : error.message})
        dispatch({type:GET_ORDER_HISTORY_FAILURE, payload : error.message})
    }
}