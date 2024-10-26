module.exports = (req, res) => {
  res.statusCode(404).json({msg: 'resource not found'})
}