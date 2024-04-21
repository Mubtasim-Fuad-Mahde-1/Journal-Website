require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const messagesRoutes = require('./routes/messages')
const postsRoutes = require('./routes/posts')
const journalRoutes = require('./routes/journals')
const editRoutes = require('./routes/edit')
const cors = require('cors')

const app = express()

app.use(cors({
    origin:'*',
    methods:["GET","POST"]
}))

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes

app.use('/api/user', userRoutes)

app.use('/api/messages', messagesRoutes)

app.use('/api/posts', postsRoutes)

app.use('/api/edit', editRoutes)

app.use('/api/journals', journalRoutes)


// connect to db

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

