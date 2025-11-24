const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/services', (req, res) => res.render('services'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/testimonials', (req, res) => res.render('testimonials'))

app.listen(3000, () => console.log('DevOps site live at http://localhost:3000'));