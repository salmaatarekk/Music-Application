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
    const select = "select title from songs";
    let songs;
    connection.query(select, (err, result, fields) => {
        callback(result);
    });
}


api.get('/music/songs', (request, response) =>{
    getSongs(request, response, (returnedValue) => {
        response.send(returnedValue);
    } )
} );

api.listen(3000);
