// 1. Define a Mongoose schema with nested sub-documents and validation rules.

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true, match: /^[0-9]{5}$/ },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  age: { type: Number, min: 18, max: 100 },
  address: { type: addressSchema, required: true },
  hobbies: [{ type: String, enum: ["reading", "sports", "music", "coding"] }],
});

module.exports = mongoose.model("User", userSchema);
