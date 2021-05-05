const htmlReponse = require('../utils/htmlResponse');
const htmlPromiseResponse = require('../utils/htmlPromiseResponse');

// by createReadStream 
/*const index = res => htmlReponse(res, 'index');
const about = res => htmlReponse(res, 'about');
const contact = res => htmlReponse(res, 'contact');
const error404 = res => htmlReponse(res, '404', 404);*/

// by promise request
const index = res => htmlPromiseResponse(res, 'index');
const about = res => htmlPromiseResponse(res, 'about');
const contact = res => htmlPromiseResponse(res, 'contact');
const error404 = res => htmlPromiseResponse(res, '404', 404);

// cannot modify export routes by Object.freeze
module.exports = Object.freeze({
  index,
  about,
  contact,
  error404
});