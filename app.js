// setup
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var https = require ('https');
var port = 3002;
var app = express();

//configuration
mongoose.connect('mongodb://localhost:27017/mydb')

app.use(favicon(path.join(__dirname, '', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

var solLogSchema = mongoose.Schema({
	datum : String,
	waarde : Number,
	max : Number
});

var solLog = mongoose.model('solarlogs',solLogSchema);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

//Check the count to see if proper connection
 solLog.count(function(err, count) {
   if(err) return console.error(err);
   
   console.log(count)
 });

//APIs
// select all
app.get('/solarlog', function(req, res) {
  solLog.find({}, function(err, docs) {
   if(err) return console.error(err);
   res.json(docs);
   console.log("app.get -> /solarlog");
 });
});

// count all
app.get('/solarlog/count', function(req, res) {
 solLog.count(function(err, count) {
   if(err) return console.error(err);
   res.json(count);
 });
});

// create
app.post('/solarlog', function(req, res) {
 var obj = new solLog(req.body);
 obj.save(function(err, obj) {
   if(err) return console.error(err);
   res.status(200).json(obj);
 });
});

// find by id
app.get('/solarlog/:id', function(req, res) {
 solLog.findOne({_id: req.params.id}, function(err, obj) {
   if(err) return console.error(err);
   res.json(obj);
 })
});

// update by id
app.put('/solarlog/:id', function(req, res) {
 solLog.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
   if(err) return console.error(err);
   res.sendStatus(200);
 })
});

// delete by id
app.delete('/solarlog/:id', function(req, res) {
 solLog.findOneAndRemove({_id: req.params.id}, function(err) {
   if(err) return console.error(err);
   res.sendStatus(200);
 });
});


	   

//listen (create server and start listening)
https.createServer({
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}, app).listen(port,function (){
	console.log('Example listening on port 3002!');
	});
