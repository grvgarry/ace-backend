const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
var cors = require("cors");
app.use(cors());
// Setup server port
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.json({"message": "Hello Triple Ace Tech"});
});

// app.use('/api/video', videoService);

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});