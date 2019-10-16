const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true)

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

mongoose.connect(
	'mongodb://visitante:visitante@nodestr-shard-00-00-96u5u.mongodb.net:27017,nodestr-shard-00-01-96u5u.mongodb.net:27017,nodestr-shard-00-02-96u5u.mongodb.net:27017/api?ssl=true&replicaSet=nodestr-shard-0&authSource=admin&retryWrites=true&w=majority',
	{ useNewUrlParser: true }
)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
		return res.status(200).json({})
	}
	next()
})

// Rotas que devem lidar com requisições
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
	const error = new Error('Not found')
	error.status = 404
	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message
		}
	})
})

module.exports = app