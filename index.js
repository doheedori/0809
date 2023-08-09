const express = require('express');
const bodyParser = require('body-parser');


const login = express();


login.use(bodyParser.json());
login.use(bodyParser.urlencoded({ extended: true }));

login.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid username or password');
  }

  return res.status(200).json({
    id: user.id,
    username: user.username
  });
});


