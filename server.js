const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const auth = require('./server/src/routes/auth');
const user = require('./server/src/routes/users');


const MONGO_URL = 'mongodb+srv://mernGraphql:xJOGVBsRajKoLzVl@devmern-bfjzi.mongodb.net/mernGraph?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err))

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Init Middleware
//app.use(bodyParser.urlencoded({ extended: false })); 
//using express.json() instead of bodyParser
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', user);
app.use('/api/auth', auth);
app.use('/api/profile', require('./server/src/routes/profile'));
app.use('/api/posts', require('./server/src/routes/posts'));
app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`)
})