// inside modules of nodeJS

// fs: FileSystem
const {readFile, readdir, writeFile} = require('fs');

// path: system paths
const {join} = require('path');

// http: http communication
const http = require('http');

const users = [
  {
      id: 1, 
      name: 'Zoltán',
      email: 'j@gmail.com',
  },
  {
      id: 2, 
      name: 'Ádám',
      email: 'j@outlook.com',
  },
  {
      id: 3, 
      name: 'Alfréd',
      email: 'j@gmail.com',
  },
  {
      id: 4, 
      name: 'Géza',
      email: 'j@hotmail.com',
  },
];

console.time('writing');
const filePath =  join(__dirname, 'data', 'user.json');
writeFile(
  // __dirname where this file in located
  filePath,
  JSON.stringify(users, null, 4),
  'utf8', // ne binarisan kódoljon, hanem utf8,
  (err) => { // callback is run after file writing, async
    if (err) {
      return console.error(err);
    }
    console.log('Users are saved.');
    console.timeEnd('writing');
  }
);