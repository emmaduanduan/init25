const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, "../index.html"));
});
// check the value of port. If it does not have one, we use 4005 by default.
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
