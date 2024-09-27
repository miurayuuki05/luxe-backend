const express = require('express');
const app = express();
const port = 3050;

app.get('/login', (req, res) => {
  res.send('this is the login function');
});

app.listen(port, () => {
  console.log(`Listening at :${port}`);
});