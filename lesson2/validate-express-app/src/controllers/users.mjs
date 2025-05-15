const getUsersHandler = (req, res) => {
  res.end('Response from Express users handler')
}

const postUsersHandler = (req, res) => {
  res.end('Response from Express post users handler')
}

const getUserByIdHandler = (req, res) => {
  const userId = req.params.userId
  res.end(`Response from Express user by id handler: ${userId}`)
}

const putUserByIdHandler = (req, res) => {
  const userId = req.params.userId
  res.end(`Response from Express put user by id handler: ${userId}`)
}

const deleteUserByIdHandler = (req, res) => {
  const userId = req.params.userId
  res.end(`Response from Express delete user by id handler: ${userId}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  deleteUserByIdHandler
}
