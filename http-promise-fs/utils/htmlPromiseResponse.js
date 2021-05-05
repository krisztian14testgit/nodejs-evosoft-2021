const {createReadStream} = require('fs');
const {readFile} = require('fs').promises;
const {join} = require('path');

/**
 * Promise lefut akkor is ha semilyen klien nem iratkozik fel rá a streamre.
 * Utolsó feliratkozó kliense megkapja a responset, ha már a reequest ideje lejárt akkor is.
 * When use promise
 * * read file
 * * authentication
 * 
 */
/*const htmlResponse = (response, file, statusCode = 200) => {
  const filePath = join(__dirname, `../views/${file}.html`);

  readFile(filePath, 'utf-8')
  .then(content => {
    response.writeHead(statusCode, {
      "Content-Type": 'text/html'
    });
     response.write(content);
     response.end();
  },
  err => {
    console.error(err);
    response.writeHead(500, {
      "Content-Type": 'text/html'
    });
    response.write('Server Error');
    response.end();
  });
};*/

// async - await wrapping - promise request
const htmlResponse = async (res, file, statusCode = 200) => {
  const filePath = join(__dirname, `../views/${file}.html`);

  try {
      const content = await readFile(filePath, 'utf-8');
      res.writeHead(statusCode, {
          'Content-Type': 'text/html'
      });
      res.write(content);
  } catch (err) {
      res.writeHead(500, {
          'Content-Type': 'text/html'
      });
      switch (err.errno) {
          case -4058: res.write('File not found...');
          break;
          default: res.write(`<h1>Server Error</h1>`);
      }
  } finally {
      res.end();
  }

};

module.exports = htmlResponse;