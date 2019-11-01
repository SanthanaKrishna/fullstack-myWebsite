const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = require('./server/src/app');



const MONGO_URL = 'mongodb+srv://mernGraphql:xJOGVBsRajKoLzVl@devmern-bfjzi.mongodb.net/mernGraph?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3001;

// app.use(cors());
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err))

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));





app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`)
})