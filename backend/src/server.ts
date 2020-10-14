import express from 'express'

import './database/connection'

const app = express()
app.use(express.json())

const port = process.env.PORT || 3333

app.get('/', (req, res) => {

})

app.listen(port, () => console.log(`Runing on port ${port}`))