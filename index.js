if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const data = require('./menu.json');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home', { ...data })
})

app.get('/menu', (req, res) => {
    res.render('menu')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Serving on port 3000')
})