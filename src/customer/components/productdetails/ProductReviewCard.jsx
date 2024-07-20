import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={2}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>A</Avatar>
                </Box>
            </Grid>

            <Grid item xs={8}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Anshuman</p>
                        <p className=' opacity-70'>April 5, 2024</p>
                    </div>
                </div>
                <Rating value={3.5} name="half-rating" precision={.5} readOnly/>
                <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard