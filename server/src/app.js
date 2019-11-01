const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads')); //make folder public
//Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//using express.json() instead of bodyParser
// app.use(express.json({ extended: false }));




// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'PATCH', 'DELETE');
        return res.status(200).json({});
    }
    next();
});

// const auth = require('./routes/auth');
// const user = require('./routes/users');
// const profile = require('./routes/profile');
// const posts = require('./routes/posts')
// //Define Routes
// app.use('/api/users', user);
// app.use('/api/auth', auth);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.satus = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;