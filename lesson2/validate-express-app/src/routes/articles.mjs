import { Router } from 'express'
import {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  deleteArticleByIdHandler
} from '../controllers/articles.mjs'

const articlesRouter = Router()

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(getArticleByIdHandler)
  .put(putArticleByIdHandler)
  .delete(deleteArticleByIdHandler)

export default articlesRouter
