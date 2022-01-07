const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("db connexion success"))
    .catch((err) => console.log(err));

app.use(express.json());

app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/checkout', stripeRoute);



app.listen(process.env.PORT || 3000, () => {
    console.log('server running');
})