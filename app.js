const fs = require('fs')
const path = require('path')

const PUBLIC_PATH = path.join(__dirname, 'public')

function handleNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('page not found', 'utf-8')
}

function getContentType(req) {
  const extname = path.extname(req.url)
  let contentType
  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
    case '.wav':
      contentType = 'audio/wav'
      break
    default:
      contentType = 'text/html'
  }
  return contentType
}

function handleError(req, res, error) {
  res.writeHead(500, { 'Content-Type': 'text/plain' })
  res.end(`internal error: ${error.code}`, 'utf-8')
}

function handleReadFile(req, res, fileName) {
  fs.readFile(path.join(PUBLIC_PATH, fileName), function(error, data) {
    if (error && error.code === 'ENOENT') return handleNotFound(req, res)
    else if (error) return handleError(req, res, error)
    res.writeHead(200, { 'Content-Type': getContentType(req) })
    res.end(data, 'utf-8')
  })
}

function app(req, res) {
  const fileName = req.url
  if (fileName === '/') return handleReadFile(req, res, 'index.html')
  handleReadFile(req, res, req.url)
}

module.exports = app
