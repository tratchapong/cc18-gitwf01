module.exports = (err, req, res, next) => {
  res.json({error : err.message})
}
