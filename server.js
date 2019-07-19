const express = require('express');
const graphQLHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./server/schema/userDetailsSchema');
const cors = require('cors');


const app = express()
//allow cross-origin requests
app.use(cors());

mongoose.connect(
    'mongodb+srv://graphql_bookAuthor:6DHtXGuSxtmCe3N4@devmern-bfjzi.mongodb.net/Graphql?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

mongoose.connection
    .once('open', () => console.log('database is connected with mongodb'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}))
app.listen('4000', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('server started');
})