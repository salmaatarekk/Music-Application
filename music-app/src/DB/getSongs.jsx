import React, { Component } from 'react';

const mysql = require('mysql');

const connecntion = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "tiger",
    database: "Music App"
});

const getSongs = () => {
    // const select = 'select id, name from songs';
    // const rows = connecntion.query(select );
    // return rows;
}
 
export default getSongs;