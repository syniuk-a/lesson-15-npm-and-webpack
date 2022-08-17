// const Joi = require('joi');
// const shortid = require('shortid');
 
// const passwordShema = Joi.string().min(10).max(14).alphanum();

// console.log(passwordShema.validate('44444443345'));
// console.log(shortid.generate());

const express = require('express');

const app = express();

app.use('*', (req, res) => {
  console.log('был запрос на сервер от браузера');
  res.send('<h1>Ну был да и был и что тут такого</h1>')
})

const listener = app.listen(4444, () => {
  console.log(`сервер запущен на порте ${listener.address().port}`);
});