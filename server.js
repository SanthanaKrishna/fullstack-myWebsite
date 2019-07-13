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

mongoose.connection.once('open', () => {
    console.log('database is connected with mongodb')
})

app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}))
app.listen('4000', () => {
    console.log('server started');
})