const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/authroute'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userformdb',
})

db.connect((error) => {
    if (error) {
        console.error(error.sqlMessage);
    }else {
        console.log('MySQL - Connected Successfully');
    }
});

app.listen('7000', (error) => {
    if (!error) {
        console.log('MySQL - Server has started at 7000 Successfully');
    }else {
        console.log('Error at starting Server' + error);
    }
});