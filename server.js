const express = require('express');
const app = express();
const path = require('path');

// FIX: Remove X-Powered-By header (Security/SEO requirement)
app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Portfolio running at http://localhost:3000'));