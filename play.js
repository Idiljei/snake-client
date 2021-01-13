//main file where we will launch the game client 

const net = require('net');  

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({  //create connection from net library
    host: '135.23.222.131',
    port: 50542

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data); 
  }); 
  // this is telling client what to// in this case console.log
  return conn;
}

console.log('Connecting ...');
connect();