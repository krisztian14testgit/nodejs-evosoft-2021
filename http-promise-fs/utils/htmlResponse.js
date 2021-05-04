const {createReadStream} = require('fs');
const {join} = require('path');

const htmlReponse = (response, file, statusCode = 200) => {
  const filePath = join(__dirname, `../views/${file}.html`);
  response.writeHead(statusCode, {
    "Content-Type": 'text/html'
  });

  // create server with response.writecls
  createReadStream(filePath).pipe(response);
};

module.exports = htmlReponse;