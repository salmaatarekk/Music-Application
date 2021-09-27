const { json } = require("express");
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

function getSongs() {
    const select = "select title from songs";
    let songs;
    connection.query(select, (err, result) => {
        songs = result;
        console.log( songs );
    });
    return songs;
}
getSongs();



// export default getSongs;
