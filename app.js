const express = require('express');
const path = require('path');
const app = express();

app.listen(4432, ()=> console.log("server ok"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})