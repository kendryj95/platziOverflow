import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 3000

const debug = new Debug('platzi-overflow:root')

app.listen(PORT, () => {
	debug(process.env.NODE_ENV,`Server running at port ${PORT}`)
})