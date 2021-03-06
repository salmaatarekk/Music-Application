const { deleteSong } =  require('./sqlQueries');

const mysql = require("mysql");


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
    const select = "select id, title, artistName, image from songs";
    //let songs = [];
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

function createNewUser(req)
{
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
}


function createNewSong(req)
{
    let newSongTitle = req.body.name;
    let newSongAlbumName = req.body.album;
    let newSongArtistName = req.body.artist;
    let Image = req.files.image.name;
    const insert = `insert into songs (title, albumName, artistName, image) values ('${newSongTitle}', '${newSongAlbumName}', '${newSongArtistName}', '${Image}')`;
    connection.query(insert, (err, result) => {
      if(err)
      console.log("newSong err", err);
    })
}

function deleteSongFromDB(req)
{
const deleteQuery =  deleteSong(req.params.id);
 connection.query(deleteQuery, (err, result) =>{
   if(err)
   console.log("Delete", err);
   else 
   console.log("Deleted");
 } )
}

module.exports.getSongs = getSongs ;
module.exports.getUsers = getUsers ;
module.exports.searchForUser = searchForUser ;
module.exports.createNewUser = createNewUser;
module.exports.createNewSong = createNewSong;
module.exports.deleteSongFromDB = deleteSongFromDB;