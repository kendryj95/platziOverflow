import express from 'express'

const app = express.Router()

const question = {
	_id: 1,
	title: '¿Como reutilizo mi componente en Android?',
	description: 'Mire, esta es la respuesta de la pregunta...',
	createdAt: new Date(),
	icon: 'devicon-android-plain',
	answers: [],
	user: {
		firstName: 'Kendry',
		lastName: 'Ortiz',
		email: 'kendry@gmail.com',
		password: '123456'
	}
}

const questions = new Array(10).fill(question)

/* ROUTES */

// GET /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// GET /api/questions/:id
app.get('/:id', (req, res) => {
	let { id } = req.params

	const q = questions.find(({ _id }) => _id === +id)

	res.status(200).json(q)
})

// POST /api/questions
app.post('/', (req, res) => {
	const question = req.body
	question._id = +new Date()
	question.user = {
		firstName: 'Kendry',
		lastName: 'Ortiz',
		email: 'kendry@gmail.com',
		password: '123456'
	}
	question.createdAt = new Date()
	questions.push(question)

	res.status(201).json(question)
})

export default app