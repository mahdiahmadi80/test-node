const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app =express()
app.use(cors());




const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'world'
    })




app.get('/',(req,res) => {
    return res.json("from back side");
})



app.get('/city',(req,res) => {
    const sql = "SELECT * from city";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
})



app.listen(8081, ()=> {
    console.log("server is running on port 8081");
});