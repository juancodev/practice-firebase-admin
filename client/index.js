const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

app.use(cors());

app.use('/', express.static(path.resolve(__dirname, 'dashboard')));
app.use('/login', express.static(path.resolve(__dirname, 'login')));
app.use('/register', express.static(path.resolve(__dirname, 'register')));
app.use('/products', express.static(path.resolve(__dirname, 'products')));



app.listen(3200, () => {
  console.log('Server running!');
})