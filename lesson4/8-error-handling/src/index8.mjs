import express from 'express'
import { ValidationError } from './ValidationError.mjs'

const app = express()
const port = 3000

app.get('/', async (req, res, next) => {
  try {
    await Promise.reject(new Error('Can\'t get the data'))
  } catch (err) {
    next(err)
  }
})

app.get('/json', async (req, res, next) => {
  try {
    await Promise.reject(new ValidationError('Custom validation message'))
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    console.error('ValidationError:', err.message)
    console.error('Status code:', err.statusCode)
    res.status(err.statusCode).json({ error: 'Validation failed', message: err.message })
  } else {
    console.error('Error:', err.message)
    res.status(500).json({ message: err.message })
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
