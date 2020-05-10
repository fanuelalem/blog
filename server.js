const express = require('express');
const myroute = require('./routes/myroutes/index')
const mysql = require('mysql')
const cors = require('cors')
 
const PORT = process.env.PORT || 8000;

const app = express();


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/" ,myroute)


app.listen(PORT, () => console.log('Port started on port: ' + PORT));