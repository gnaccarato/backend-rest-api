let mongoose = require('mongoose')

const server = "ds135233.mlab.com:35233"
const database = "backend-rest-api"
const user = "admin1"
const password = "admin1"

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	}
})

module.exports = mongoose.model('Customer', CustomerSchema)