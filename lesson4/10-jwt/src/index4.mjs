import jwt from 'jsonwebtoken'
import { logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const options = {
  algorithm: 'HS512' // HS256, HS384, HS512 - симетричні алгоритми
}
// RS256, RS384, RS512, ES256, ES384, ES512, PS256, PS384, PS512 - асиметричні алгоритми

const token = jwt.sign(payload, secretKey, options)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)
