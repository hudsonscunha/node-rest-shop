const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true)

const Order = require('../models/order')
const Product = require('../models/product')

// Manipular requisições GET recebidas de /pedidos
router.get('/', (req, res, next) => {
	Order.find()
		.select('quantity product _id')
		.then(docs => {
			res.status(200).json({
				count: docs.length,
				orders: docs
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		})
})

router.post('/', (req, res, next) => {
	Product.findById(req.body.productId)
		.then(product => {
			if (!product) {
				return res.status(404).json({
					message: 'Produto não encontrado'
				})
			}
			const order = new Order({
				_id: mongoose.Types.ObjectId(),
				quantity: req.body.quantity,
				product: req.body.productId
			})
			return order
				.save()
		})
		.then(result => {
			console.log(result)
			res.status(201).json({
				message: 'Pedido armazenado',
				createdOrder: {
					_id: result._id,
					product: result.product,
					quantity: result.quantity
				}
			})
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

router.get('/:orderId', (req, res, next) => {
	Order.findById(req.params.orderId)
		.then(order => {
			if (!order) {
				return res.status(404).json({
					message: 'Pedido não encontrado'
				})
			}
			res.status(200).json({
				order: order
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		})
})

router.delete('/:orderId', (req, res, next) => {
	Order.remove({ _id: req.params.orderId })
	.then(result => {
		res.status(200).json({
			message: 'Pedido excluído'
		})
	})
	.catch(err => {
		res.status(500).json({
			error: err
		})
	})
})

module.exports = router