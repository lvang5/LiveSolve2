const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const body = require('body-parser');

app.use(express.static('server/public') );
// app.use(bodyParser.urlencoded({extened: true}));
app.listen(port, ()=> {
    console.log('server is on port:', port);
    
})
