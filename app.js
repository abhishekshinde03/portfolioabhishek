const express = require('express');
const app = express();
const port = 4000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`,
}));

app.use(express.static('public'));

app.get('/contactus', (req, res) => {
    res.render('Contact us', {layout: 'Contact us'}); 
});

app.get('/work', (req, res) => {
    res.render('Work', {layout: 'Portfolio'}); 
});

app.get('/about', (req, res) => {
    res.render('About us', {layout: 'About Me'}); 
});

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'}); 
});

app.listen(process.env.PORT || 3003, () => {
    console.log("server started at port 3003");
});