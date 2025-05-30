import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import apiRoutes from './routes.mjs'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(__dirname + '/public'))

app.use(apiRoutes)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})
