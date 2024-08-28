import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addresscard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from '../../../state/Order/Action'
import { useNavigate } from 'react-router-dom';

function DeliveryAddress() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth} = useSelector(store => store)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {};

        // Iterate over the FormData entries
        for (let [key, value] of data.entries()) {
            address[key] = value; // Add each key-value pair to the address object
        }

        const orderData = {address:address,navigate:navigate}

        dispatch(createOrder(orderData))
        console.log(address);
    };

    console.log('auth' ,auth);
    
    return (
        <div>
        <Grid container spacing={4}>
            <Grid item xs={12} lg={5} className="">
            <div className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                { auth?.user?.address.map((item) => <AddressCard address={item}/>) }
                <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                >
                    Delivery Here
                </Button>
                </div>
            </div>
            </Grid>

            <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="streetAddress"
                        name="streetAddress"
                        label="Address"
                        fullWidth
                        autoComplete="given-name"
                        multiline
                        rows={4}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State/Region"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zipCode"
                        name="zipCode"
                        label="Zip/Postal Code"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mobile"
                        name="mobile"
                        label="Phone Number"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                    <Button
                        fullWidth
                        sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                        size="large"
                        variant="contained"
                        type="submit"
                    >
                        Delivery Here
                    </Button>
                    </Grid>
                </Grid>
                </form>
            </Box>
            </Grid>
        </Grid>
        </div>
    );
}

export default DeliveryAddress;
