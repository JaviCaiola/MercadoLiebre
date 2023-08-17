const express = require('express');
const mainRouter = require('./routes/mainRoutes');
const app = express();

app.listen(4432, () => console.log("server ok"));

app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use(express.static('public'));

app.get(mainRouter)