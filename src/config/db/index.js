const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_course', {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    })
    console.log('Connected successfully')
  } catch (error) {
    console.log('Connected failed')
  }
}

module.exports = { connect }
