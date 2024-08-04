const express = require('express');
const cors = require("cors");
const authRouters = require('./routes/auth.route');
const userRouters = require('./routes/user.route');
const productRouters = require('./routes/product.route');
const adminProductRouters = require('./routes/adminProduct.route');
const adminRouters = require('./routes/admin.route');
const orderRouters = require('./routes/order.route');
const cartRouters = require('./routes/cart.route');
const cartItemRouters = require('./routes/cartItem.route');
const ratingRouters = require('./routes/rating.route');
const reviewRouters = require('./routes/review.route');

const app = express();

// app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    return res.status(200).send({
        message:"Welcome to my project",
        status:true
    })
});

app.use('/auth', authRouters);
app.use('/api/users', userRouters);
app.use('/api/products', productRouters);
app.use('/api/admin/products', adminProductRouters);
app.use('/api/admin/orders', adminRouters);
app.use('/api/orders', orderRouters);
app.use('/api/cart', cartRouters);
app.use('/api/cart_items', cartItemRouters);
app.use('/api/ratings', ratingRouters);
app.use('/api/reviews', reviewRouters);

module.exports = app;