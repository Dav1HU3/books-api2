const mongoose = require('mongoose')

const mongoUrl = 'mongodb://dav1:12345678a@ds243212.mlab.com:43212/books-app'

const connect = () => mongoose.connect(mongoUrl)

module.exports = { connect };