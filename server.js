const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const uri = process.env.MONGODB_URI;
const app = express()

// agregamos el serve que continene el index.html
app.use('/',serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('listening on port: ' + port)