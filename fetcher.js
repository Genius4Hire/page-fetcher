const request = require('request');
const fs = require('fs');

args = process.argv.slice(2);

const URL = args[0];
const PATH = args[1];


request(URL, (error, response, body) => {
  if (error) {
    console.log('Request error:', error); // Print the error if one occurred
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  };
  fs.writeFile(PATH, 'utf8', (error, body) => {
    if (error) {
      console.log("File error: ", error)
    } else {
      console.log(`File saved in ${PATH}`);
    };
  });

});