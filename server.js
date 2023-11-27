const http = require('http')
require('dotenv').config()

http.createServer().listen(process.env.port, () => {
    console.log(`Server is running in port: ${process.env.port} \nhttp://localhost:${process.env.port}`)
})