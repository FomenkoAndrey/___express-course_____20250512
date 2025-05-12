import express from 'express'
import router from './routes/index.mjs'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)

// TODO: додати обробник помилок валідації
// TODO: валідацію даних

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: 'error',
      code: err.status || 500,
      message: err.message || 'Internal Server Error'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
