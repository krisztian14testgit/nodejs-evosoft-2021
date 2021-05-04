const http = require('http');
const {URL} = require('url');
const siteRouter = require('./router/site.router');
const port = 8080;

// create server, minden egy klien számára külön-külön lefut.
// This is continuously run.
/*http.createServer((request, response) => {
  response.write('Hello from NodeJS');
  response.write('This is the second lines');
  response.end(); // return back the answers
}).listen(port);*/

http.createServer((request, response) => {
  const fullUrl = `http://${request.headers.host}${request.url}`;
  const query = new URL(fullUrl);
  const url = query.pathname;
  
  siteRouter[url]
    ? siteRouter[url](response)
    : siteRouter['/404'](response);
}).listen(port);

console.log(`Server is running at http://127.0.0.1:${port}`);