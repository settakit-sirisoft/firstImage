const express = require('express')
const path = require('path');
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.MY_NAME}`)
})

app.get('/write', (req, res) => {
  const fs = require('fs');

  const content = `<li>Hello ${process.env.MY_NAME}!</li>\n`;

  fs.appendFile('test.html', content, err => {
    if (err) {
      console.error(err);
    }
  });
  res.sendFile(`${path.join(__dirname)}/test.html`)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})