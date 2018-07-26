const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helper = require('./public/helper');
const app = express();
const port = process.env.port || 3000;
const globalPath = path.join(__dirname, "../");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Test');
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/app/*', (req, res) => {
    helper(req.body.name, req.body.path, req.body.location, req.body.basemap, req.body.color)
    let redirectURL = '/app/' + req.body.path + '?view=' + req.body.path;
    return res.redirect(redirectURL);
});

app.get('/app/*', (req, res) => {
    res.sendFile(globalPath + '__' + req.query.view + '/__' + req.query.view +'.html');
});

app.get('*', (req, res) => {
    res.status(404).send('Page does not exists!');
});

app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT 3000");
});