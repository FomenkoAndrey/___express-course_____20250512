const getArticlesHandler = (req, res) => {
  res.end('Response from Express articles handler')
}

const postArticlesHandler = (req, res) => {
  res.end('Response from Express post articles handler')
}

const getArticleByIdHandler = (req, res) => {
  const articleId = req.params.id
  res.end(`Response from Express get article by id handler: ${articleId}`)
}

const putArticleByIdHandler = (req, res) => {
  const articleId = req.params.id
  res.end(`Response from Express put article by id handler: ${articleId}`)
}

const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params.id
  res.end(`Response from Express delete article by id handler: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  deleteArticleByIdHandler
}
