import express from 'express'
import { mainController } from '../controllers/mainController.mjs'

const router = express.Router()

router.get('/', mainController)
router.post('/', mainController)

export default router
