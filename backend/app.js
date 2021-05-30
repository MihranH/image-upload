const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

app.use(require('./router'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    })
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})