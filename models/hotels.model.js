let mongoose = require("mongoose");

let hotelSchema = mongoose.Schema({
  hotel_name: {type: String, required: true},
  description: {type: String},
  address: {type: String, required: true},
  pin: {type: Number, required: true},
  city: {type: String},
  created_by: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: true}
}, { timestamps: true });


let Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
