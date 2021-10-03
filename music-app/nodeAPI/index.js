const express = require("express");


const {getSongs, getUsers, searchForUser, createNewUser , createNewSong} = require('./helperModule');
const {deleteSong} = require('./sqlQueries')
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
  console.log('id', req.params.id);
 const deleteQuery =  deleteSong(req.params.id);
 connection.query(deleteQuery, (err, result) =>{
   if(err)
   console.log("Delete", err);
   else 
   console.log("Deleted");
 } )
})



api.listen(5000);