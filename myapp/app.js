const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // return the BasicExample.html file
    res.sendFile(__dirname + '/BasicExample.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})