const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const postsRoutes = require('./routes/posts')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', postsRoutes)

app.get('/', (req, res) => {
    res.send('home')
})

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db'))
app.listen(3000, () => console.log('listening to port 3000'))