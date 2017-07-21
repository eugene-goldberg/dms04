
// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
//
//// configuration ===========================================
//var mongoDB = 'mongodb://root:root@localhost:27017/dms';
//mongoose.connect(mongoDB);
//
//var db = mongoose.connection;
//
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
//
//db.once('open', function () {
//    var tasksSchema = new mongoose.Schema({
//        _id: String,
//        What: String,
//        Who: String,
//        When: Date
//    });
//
//    tasksSchema.set('collection', 'task');
//
//    var Task = db.model('task', tasksSchema);
//    Task.findOne({}, function (err, tasks) {
//        if (err) {
//            onErr(err, callback);
//        } else {
//            mongoose.connection.close();
//            console.log(tasks.What);
//            //callback("", tasks);
//        }
//    });
//
//
//});

var port = process.env.PORT || 9080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
