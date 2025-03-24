const express = require('express');
const app = express();
app.use(express.static('cilent'))

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});
