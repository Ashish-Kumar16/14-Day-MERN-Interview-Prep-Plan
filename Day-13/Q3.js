// 3. Execute queries using `.find()`, `.findOne()`, and append `.lean()` for performance.

const mongoose = require("mongoose");
const User = require("./Q1"); 

User.find({ age: { $gte: 18 } })
  .lean()
  .then((users) => {
    console.log("All users age 18+:", users);
  })
  .catch((err) => console.error(err));

User.findOne({ email: "test@example.com" })
  .lean()
  .then((user) => {
    console.log("User with email test@example.com:", user);
  })
  .catch((err) => console.error(err));
