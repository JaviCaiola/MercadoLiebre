const express = require('express');
const path = require('path');
const app = express();

app.listen(4432, ()=> console.log("server ok"));

app.use(express.static(__dirname+'/'));
app.use('/img', express.static(__dirname+'public/img'));
app.use('/css', express.static(__dirname+'public/css'));
app.use('/js', express.static(__dirname+'public/js'));
app.use('/svg', express.static(__dirname+'public/svg'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
})