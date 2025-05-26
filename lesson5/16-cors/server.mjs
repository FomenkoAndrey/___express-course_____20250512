import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const PORT = 4000
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + '/src/public'))

app.listen(PORT, () => {
  console.log(`Test server is running on port ${PORT}`)
})
