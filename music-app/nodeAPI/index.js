const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const { response } = require("express");


const api = express();
api.use(express.json());
api.use(cors());


let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "library",
});
connection.connect((err) => {
  if (err) throw err;
  
});

function getSongs(req, res, callback) {
    const select = "select songs.id, songs.title, artistName from songs";
  
    connection.query(select, (err, result, fields) => {
        callback(result);
    });
}
function getUsers(req, res, callback){
  const select = "select id, name from users ";
  connection.query(select, (err, result, fields) => {
    callback(result);
});
}

function searchForUser(req, res, callback){
  const select = `select * from users where email = ${req.params.userEmail} and password = ${req.params.userPassword} `;
  connection.query(select, (err, result, fields) =>{
    callback(result);
  } )
}

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
  let newUserName = req.body.newUserName;
  let newUserPassword = req.body.newUserPassword;
  let newUserEmail = req.body.newUserEmail;
  let isAdmin = req.body.isAdmin;
  const insert = `insert into users (name, email, isAdmin, password ) values ( '${newUserName}', '${newUserEmail}', ${isAdmin}, '${newUserPassword}' )`;
  connection.query(insert, (err, result) => {
    if(err)
     console.log("NewUser error", err);
     else
    console.log('registered');
  })
})

api.post('/createNewSong', (req, res) =>{
  let newSongTitle = req.body.newSongTitle;
  let newSongAlbumName = req.body.newSongAlbumName;
  let newSongArtistName = req.body.newSongArtistName;
  const insert = `insert into songs (title, albumName, artistName) values ('${newSongTitle}', '${newSongAlbumName}', '${newSongArtistName}')`;
  connection.query(insert, (err, result) => {
    if(err)
    console.log("newSong err", err);
  })

})




api.listen(5000);