import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom'

const orderStatus = [
    {lable:"On The Way", value:"on_the_way"},
    {lable:"Delivered", value:"delivered"},
    {lable:"Cancelled", value:"cancelled"},
    {lable:"Returned", value:"returned"},
]

function Order() {

    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${10001}`)} className='px:5 lg:px-20 pt-10'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                <div className='font-bold text-lg '>Filter</div>
                <div className=' space-y-4 mt-10'>
                    <h1 className='font-semibold uppercase'>Order Status</h1>

                    {orderStatus.map((option) =><div className='flex items-center'>
                        <input defaultValue={Option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer'/>
                        <label className=' ml-3 text-sm text-gray-600' htmlFor={option.value}>
                            {option.lable}
                        </label>
                    </div>)}
                </div>

            </div>

            </Grid>
            <Grid item xs={9}>
                <div className='space-y-5 '>
                    {[1,1,1,1,1].map((item) => <OrderCard />)}
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Order