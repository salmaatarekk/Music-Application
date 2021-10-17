const express = require("express");
const {getSongs, getUsers, searchForUser, createNewUser , createNewSong, deleteSongFromDB} = require('./helperModule');
const api = express();
const fs = require('fs');
const http = require("http");
const path = require("path");
const url = require("url");
const fileUpload = require('express-fileupload');
api.use(express.json());



api.use(function (req, res, next) {
  //allow cors
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});


// default option
api.use(fileUpload({ preserveExtension: 5 }));

api.use(express.urlencoded({ extended: true }));

api.use('/upload', express.static('upload'));

// Static Files
api.use(express.static('public'));
api.use(express.static('upload'));

api.get('/searchForUsers/:userEmail/:userPassword', (request, response) => {
  searchForUser(request, response, (returnedValue) =>{
    response.send(returnedValue);
  } )
})

api.get('/music/songs', (request, response) =>{
    getSongs(request, response, (returnedValue) => {
        response.send(returnedValue);
    } )
} );

api.get('/users', (request, response) =>{
  getUsers(request, response, (returnedValue) => {
      response.send(returnedValue);
  } )
} );

api.get('/renderImage/:imageName', (req, res) => {
  //http://localhost:5000/upload/unnamed.jpg
  filePath = 'http://localhost:' + port + '/upload/' + req.params.imageName;
  // console.log(filePath);
  res.send(filePath);
})


api.post('/createNewUser', (req, res) => {
  createNewUser(req);
})

api.post('/createNewSong',  (req, res) =>{
  let sampleFile;
  let uploadPath;
  if (!req.files ) {
    return res.status(400).send('No files were uploaded.');
  }
  
  sampleFile = req.files.image;
  
  uploadPath = __dirname + '/upload/' + sampleFile.name;
  // console.log("path", uploadPath);
  sampleFile.mv(uploadPath, err => {
    if(err)
      res.status(500).send(err);
    
       createNewSong(req);
    } ) 
})

api.delete('/DeleteSong/:id', (req, res) => {
  deleteSongFromDB(req);
})

const port = 5000;

api.listen(port);