const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/abc', (req, res) => {
//     res.json({message: 'Welcome'})
// })
const db = require('./app/models')
db.connex.sync()

require('./app/routes/product.route')(app)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})