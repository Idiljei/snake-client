const net = require('net');  

const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({  //create connection from net library
    host: IP,
    port: PORT,

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => { //recieved message as a client 
    console.log(data,'wow server, you gonna play me like that?'); 
  });  
  conn.on('connect', () => { //you as a client sent the message
    conn.write('Name: IAJ') //sending it to server 
    conn.write('Move: up') 
  });  
  // this is telling client what to// in this case console.log

  return conn;
}


  module.exports = {connect};

  