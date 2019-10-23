const express = require('express');
const app = express()
const port = 3000
const account = require('./routes/accountsRoute')
const moto = require('./routes/motoRoute')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/account', account)
app.use('/moto', moto)


app.listen(port, () => console.log(`listening on port ${port}`))
