const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).send(`Hello World!`);
  console.log("Hello World!!");
});
router.use("/block", require("./routes/blockRoutes"));
module.exports = router;