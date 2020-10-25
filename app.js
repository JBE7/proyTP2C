var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const inventorsRouter = require('./routes/inventors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/inventors', inventorsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//funcion de login
app.post('/api/login', (req, res) => {
  const user = {id: 3};
  const token = jwt.sign({user}, 'mi_clave_secreta');
  res.json({
    token
  });
});

//protegido, solo se accede con el token
app.get('/api/protegido', asegurarToken, (req, res) => {
  jwt.verify(req.token, "mi_clave_secreta", (err, data) => {
    if (err){
      res.sendStatus(403);
    } else{
      res.json({
        text: 'protegido',
        data
      });
    }
  });
});

function asegurarToken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader);
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
  else{
    res.sendStatus(403);   
  }
} 

module.exports = app;
