const express = require("express");
const mysql = require("mysql");
const api = express();
api.use(express.json());

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
    const select = "select songs.id, songs.title, artists.name from songs, artists where artists.id = songs.artistID ";
  
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

api.post('createNewUser', (req, res) => {
  let newUserName = req.body.newUserName;
  let newUserPassword = req.body.newUserPassword;
  let newUserEmail = req.body.newUserEmail;
  let isAdmin = req.body.isAdmin;
  const insert = `insert into users values (default, ${newUserName}, ${newUserEmail}, ${isAdmin}, ${newUserPassword} )`
})




api.listen(5000);
