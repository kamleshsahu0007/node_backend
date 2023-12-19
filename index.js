require('dotenv').config()
const express = require ('express')
const app = express()
const port = 4000

app.get ('/', (req, res) => {
    res.send('Hello World this side kamlesh!')
})

app.get ('/login', (req, res) =>{
    res.send('<h2> Please login first!')
})

app.get('/youtube', (req, res) => {
    res.send('<h1> this is Youtube page')
})

app.get('/aboutus', (req, res) =>{
    res.send('<h1> contact me!')
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}`);
})