const express = require('express');
const app = express()
const port = 3000
const account = require('./routes/accountsRoute')
const moto = require('./routes/motoRoute')
const login = require('./routes/loginRoute')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('')
})

app.use('/register', account)
app.use('/admin', moto)
app.use('/login', login)


app.listen(port, () => console.log(`listening on port ${port}`))
