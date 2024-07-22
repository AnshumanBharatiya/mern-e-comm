import React from 'react'
import AddressCard from '../addresscard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-2xl py-8'>Delivery Address</h1>
            <div className='border shadow-md rounded-md p-5'>
                <AddressCard/>
            </div>
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5'  container>
            {[1,1,1,1,1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-2'>
                        <img className='w-[5rem] h-[rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt='' />
                        <div className='ml-5 space-y-2'>
                            <p className='font-semibold text-lg'>Men Printed Pure Cotton Straight Kurta</p>
                            <p className='space-x-5 opacity-50 text-sm font-semibold'>
                                <span>Color: Pink</span>
                                <span>Size: M</span>
                            </p>
                            <p className='opacity-50 text-sm font-semibold'>Seller: Ram Charan</p>
                            <p className='font-semibold'>&#8377;1099</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                       <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                       <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>)}
        </Grid>
    </div>
  )
}

export default OrderDetails