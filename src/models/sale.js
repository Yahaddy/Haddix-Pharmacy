const mongoose = require('mongoose')
 
 const saleSchema = new mongoose.Schema(
  {
   description: {
    type: String,
    required: true,
    trim: true,
 },

   Quantity: {
    type: Number,
    required: true,
    trim: true,
 },

   price: {
    type: Number,
    required: true,
    trim: true,
 },

   Total: {
  type: Number,
  required: true,
  trim: true,
},

 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
},
  { timestamps: true }
 )
 
 
 saleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

 
 
 const sale = mongoose.model('sale', saleSchema)
 
 module.exports = sale