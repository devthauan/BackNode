const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 4000,()=>{
    console.log("Aplicacao rodando na porta 4000")
})
app.get('/',(request,response)=>{
    response.send("Hello world")
 })