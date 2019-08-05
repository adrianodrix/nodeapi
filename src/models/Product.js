const mongoosePaginate = require('mongoose-paginate-v2')
const con = require('@service/db')

const ProductSchema = new con.Schema({
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

module.exports = con.model('Product', ProductSchema)
