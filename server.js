//
const express = require ("express")
const app = express()
app.use(express.json())

const port = 5000
require('./routes/index')(app)


app.get('/', (req, res) => {
      return res.send('Welcome to ACP server Rahul Pawan working properly')
      
}) 

app.listen(port, () => {
  
console.log(`success! Your bmc working structure showed successfully ${port}`)
})