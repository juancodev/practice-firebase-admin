const express = require('express');
const path = require('path');
const routerApp = require('./router/index');
const app = express();

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

routerApp(app);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3100, () => {
  console.log('Server running!');
})