//main file where we will launch the game client 

const net = require('net');  

const { connect } = require('./client');
const {setupInput} = require('./input')


console.log('Connecting ...');

connect();
setupInput()




