import { Router } from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'

const usersRouter = Router()

usersRouter.route('/').get(getUsersHandler).post(postUsersHandler)

usersRouter
  .route('/:id')
  .get(getUserByIdHandler)
  .put(putUserByIdHandler)
  .delete(deleteUserByIdHandler)

export default usersRouter
