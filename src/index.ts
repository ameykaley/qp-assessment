const mysql = require('mysql2');

const express = require('express');
const body = require('body-parser');

async function start() {
  try {

    const app = express();

    const con = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'NewPassword',
      database:'node_pro'
  });
  
  con.connect((err)=>{
      if(err){
          console.log("Connection not proper");
      }else{
          console.log("connected");
      }
  });

    app.con = con;

    // body parser

    app.use(express.json());

    // Routes

    app.use('/items', require('./routes/items'));
    app.use('/orders', require('./routes/orders'));

    // Start server

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }
  catch(error) {
    console.log(error);
  }
}

start();