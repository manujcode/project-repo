const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  
  item:{type:[Schema.Types.Mixed],require:true},
  totalAmount:{type:Number},
  totalItem:{type:Number},
  user:{ type:Schema.Types.ObjectId,ref:'User',required:true},
  paymentMethod:{type:String,required:true},
  paymentStatus: { type: String, default: 'pending' },
  status:{type:String,default:"pending"},
  selectAddress:{type:Schema.Types.Mixed,required:true}


});

const virtual = orderSchema.virtual("id"); 
virtual.get(function () {
  return this._id;
});
orderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
exports.Order = mongoose.model("Order", orderSchema);
