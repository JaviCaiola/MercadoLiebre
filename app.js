const express = require('express');
const path = require('path');
const app = express();

app.listen(4432, ()=> console.log("server ok"));

app.use(express.static(__dirname+'/'));
app.use('/img', express.static(__dirname+'public/img'));
app.use('/css', express.static(__dirname+'public/css'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})