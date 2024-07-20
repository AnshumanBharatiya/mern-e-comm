import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
        <Grid className=' bg-gray-900 text-white text-center mt-10' container sx={{bgcolor:"black", color:"white", py:3}}>

            <Grid item sx={12} sm={6} md={3}>
                <Typography  className='pb-5' variant='h6'> Company </Typography>
                <p><Button  className='pb-5' variant='h6'> About </Button></p>
                <p><Button  className='pb-5' variant='h6'> Blog </Button></p>
                <p><Button  className='pb-5' variant='h6'> Press </Button></p>
                <p><Button  className='pb-5' variant='h6'> Jobs </Button></p>
                <p><Button  className='pb-5' variant='h6'> Partners </Button></p>

            </Grid>
            <Grid item sx={12} sm={6} md={3}>
                <Typography  className='pb-5' variant='h6'> Solutions </Typography>
                <p><Button  className='pb-5' variant='h6'> Marketing </Button></p>
                <p><Button  className='pb-5' variant='h6'> Analytics </Button></p>
                <p><Button  className='pb-5' variant='h6'> Commerce </Button></p>
                <p><Button  className='pb-5' variant='h6'> Insights </Button></p>
                <p><Button  className='pb-5' variant='h6'> Support </Button></p>

            </Grid>
            <Grid item sx={12} sm={6} md={3}>
                <Typography  className='pb-5' variant='h6'> Documentation </Typography>
                <p><Button  className='pb-5' variant='h6'> Guids </Button></p>
                <p><Button  className='pb-5' variant='h6'> API Status </Button></p>
            </Grid>
            <Grid item sx={12} sm={6} md={3}>
                <Typography  className='pb-5' variant='h6'> Legal </Typography>
                <p><Button  className='pb-5' variant='h6'> Claim </Button></p>
                <p><Button  className='pb-5' variant='h6'> Privacy </Button></p>
                <p><Button  className='pb-5' variant='h6'> Term & Conditions </Button></p>
            </Grid>

            <Grid className='pt-20' item xs={12}>
                <Typography variant="body2" component="p" align="center"> &copy; 2024 My Company. All rights reserved. </Typography>
                <Typography variant="body2" component="p" align="center"> Made By ~aB.com~ </Typography>
                <Typography variant="body2" component="p" align="center">
                    Icons made by <Link href="https://www.freepik.com/" color="inherit" underline='always'> Freepik </Link> from <Link href="https://www.flaticon.com/" color="inherit" underline='always'> Flaticon  </Link>
                </Typography>

            </Grid> 

        </Grid>
    </div>
  )
}

export default Footer