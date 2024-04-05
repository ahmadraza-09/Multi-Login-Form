const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const md5 = require('md5')
const { promisify } = require('util');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userformdb'
})

exports.registration = async (request,response) => {
    const {name,username,email,password} = request.body;
    let hashpassword = await md5(password)
    console.log(hashpassword);
    db.query('select * from users where username= ?',[username],(error,userData)=>{
        
       if (userData != '') {
            response.send(JSON.stringify({ "status": 200, "error": null, "message": "Username already exists" }));
       }else {
            db.query('SELECT * FROM users WHERE email = ?', [email], (error, userData) => {
                if (userData != '') {
                    response.send(JSON.stringify({ "status": 200, "error": null, "message": "Email already exists" }));
                }else {
                    db.query('INSERT INTO users SET ?', { name: name, username: username, email: email, password: hashpassword }, (error, userData) => {
                        if (error) {
                            response.send(JSON.stringify({ "status": 500, "error": error }));
                        } else {
                            response.send(JSON.stringify({ "status": 200, "error": null, "message": userData }));
                        }
                    });
                }
            });
       }
    
    })

}

exports.userlist = (request,response) => {
    db.query('select * from users',[],(error,userdata)=>{
        if (error) {
            response.send(JSON.stringify({"status":200,"error":null}))
        }else {
            response.send(JSON.stringify({"status":200,"error":null,"message":userdata}))
        }

    })
}

exports.update = (request,response)=> {
    var id = request.params.id;
    db.query('update users set ? where id= ?',[request.body,id],(error,userdata)=> {
        if(error){
            response.send(JSON.stringify({"status":200,"error":null}))
        }else{
            response.send(JSON.stringify({"status":200,"error":null,"message":userdata}))
        }
    })
}

