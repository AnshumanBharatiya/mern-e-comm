import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from '../../state/Auth/Action';

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")

    useEffect(() => {
        if(jwt){
          dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])    

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const userData = {
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))

        console.log(userData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete='email'
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete='given-name'
                        />

                    </Grid>

                    <Grid item xs={12}>
                        <Button
                        className='bg-[#9155FD] w-full'
                        type='submit'
                        variant='contained'
                        size='large'
                        sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
                        >
                            Login
                        </Button>

                    </Grid>

                </Grid>
            </form>

            <div className='flex justify-center items-center flex-col'>
                <div className='py-3 flex items-center'>
                    <p>Don't Have Account ? </p>
                    <Button onClick={() => navigate("/register")}
                    className='ml-5'
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm