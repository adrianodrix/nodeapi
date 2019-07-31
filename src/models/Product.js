const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
},
{ timestamps: true })

ProductSchema.statics.findByTitle = title => this.find({ title: new RegExp(title, 'i') })

ProductSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Product', ProductSchema)
