import express from 'express'
import { question } from './routes'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') {
	app.use((req,res,next) => {
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
		res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATH, DELETE, OPTIONS')
		next()
	})
}

app.use('/api/questions', question)

export default app