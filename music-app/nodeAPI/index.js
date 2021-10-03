const express = require("express");
const {getSongs, getUsers, searchForUser, createNewUser , createNewSong, deleteSongFromDB} = require('./helperModule');
const api = express();
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


api.post('/createNewUser', (req, res) => {
  createNewUser(req);
})

api.post('/createNewSong', (req, res) =>{
   createNewSong(req);
})

api.delete('/DeleteSong/:id', (req, res) => {
  deleteSongFromDB(req);
})



api.listen(5000);