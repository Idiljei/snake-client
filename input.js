/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (keydata) => handleUserInput(keydata)) //reads the info you're doin on keyboard 
  return stdin;
}

// "data" callback handler for stdin (standard input)
const handleUserInput = function(key){
  if (key === '\u0003') { // \u0003 map to ctrl + c input 
    process.exit()
  }
} 

module.exports = {setupInput};
