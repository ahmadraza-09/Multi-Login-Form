const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const md5 = require('md5')
const { promisify } = require('util');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userformdb'
})

exports.registration = async (request,response) => {
    const {name,username,email,password,location,image,passion} = request.body;
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
                    db.query('INSERT INTO users SET ?', { name: name, username: username, email: email, password: hashpassword, location: location, passion: passion, image: image }, (error, userData) => {
                        if (error) {
                            response.send(JSON.stringify({ "status": 500, "error": error }));
                        } else {
                            db.query('SELECT * FROM users WHERE id = ?', [userData.insertId], (error, newUser) => {
                                if (error) {
                                    response.send(JSON.stringify({ "status": 500, "error": error }));
                                } else {
                                    response.send(JSON.stringify({ "status": 200, "error": null, "message": newUser }));
                                }
                            });
                        }
                    });
                }
            });
       }
    
    })

}

exports.existingUser = async (request, response) => {
    const { name, username, email, password } = request.body;
    let hashpassword = await md5(password);

    db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (error, userData) => {
        if (error) {
            response.status(500).json({ status: 500, error: error });
        } else {
            if (userData.length > 0) {
                const existingUser = userData.find(user => user.username === username);
                if (existingUser) {
                    response.status(200).json({ status: 200, error: null, message: "Username already exists" });
                } else {
                    response.status(200).json({ status: 200, error: null, message: "Email already exists" });
                }
            } else {
                // No existing user found, you can proceed to save the data in localStorage
                const userData = { name, username, email, password };
                response.status(200).json({ status: 200, error: null, message: "User data validated" });
            }
        }
    });
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

exports.uploadImg = multer({storage: storage}).single('image');

exports.uploaduser = (request,response)=>{
   imageData = {'image':request.file.path}
   console.log(imageData);
    response.send(JSON.stringify({"status":200,"error":null,"message":imageData}))
}