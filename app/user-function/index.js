const express = require('express');
const app = express();
const userFunction = require('./route/route');
const port = 3050;
const cookieParser = require('cookie-parser');

require('./db/serve');

app.use(express.json());
app.use(cookieParser());
app.use('/userprof', userFunction);

app.listen(port, () => {
  console.log(`Listening at :${port}`);
});