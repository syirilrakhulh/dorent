const express = require('express');
const app = express()

const port = 3000
const session = require('express-session')
const accountRoute = require('./routes/accountsRoute')
const motoRoute = require('./routes/motoRoute')
const loginRoute = require('./routes/loginRoute')
const pageRoute = require('./routes/pageRoute')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

/** SESSION */
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use('/', pageRoute)
app.use('/register', accountRoute)
app.use('/admin', motoRoute)
app.use('/login', loginRoute)

app.listen(port, () => console.log(`listening on port ${port}`))