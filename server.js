//
const express = require ("express")
const app = express()
const port = 5000

app.get('/', (req, res) => {
      return res.send('Welcome to ACP server Ajay working properly')
      
}) 

app.listen(port, (error, result) => {
    if (error) { 
       console.log('server error', error)
    }
    console.log(`server is listening on ${port}`)
})