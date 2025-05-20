// 5. Construct an aggregation pipeline to group documents by a field and sort results.

const mongoose = require("mongoose");
const User = require("./Q1"); 
User.aggregate([
  {
    $group: {
      _id: "$address.city",
      userCount: { $sum: 1 },
    },
  },
  {
    $sort: { userCount: -1 },
  },
])
  .then((results) => {
    console.log("Users grouped by city:", results);
  })
  .catch((err) => console.error(err));
