import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('postribulo:root')

const app = http.createServer((req, res) => {
  debug('New Request')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hola desde Junior')
  res.end()
})

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
