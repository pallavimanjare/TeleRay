var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override');
var db = require('../model/db');
var user = require('../model/users');



router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'User information details' });
});

/*router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});*/

/*router.post('/users',function(req,res) {
	console.log('inside postfr user');
	var fullname = req.body.fullname;
	var address = req.body.address ;
	var city = req.body.city ;
	var pincode = req.body.pincode ;
	var email_address = req.body.email_address;
	var mobile_number = req.body.mobile_number; 
	var user_name = req.body.user_name;
	var password = req.body.password;
	console.log('values are ::' + fullname +"" + address+ "" +city);
	//res.json({ message: 'hooray! welcome to our api!' });


		//create user schema
		var userData  =  user({
			fullname: fullname,
			address : address ,
			city : city ,
			pincode : pincode , 
			email_address : email_address,
			mobile_number : mobile_number,  	
			is_added : true ,
			is_modified : false , 
			is_deleted : false   
		});
		console.log('user data has been set');
		userData.save(function (err , user){
			if(err) {
				console.log('error in save :::' + err);
			}
			else {
				console.log('user is created');
			}
		});

	});

*/

//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/')
    //GET all blobs
 /*   .get(function(req, res, next) {
        //retrieve all blobs from Monogo
        mongoose.model('User').find({}, function (err, users) {
              if (err) {
                   console.log(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                 console.log('user values as ::' + users);
              }     
        });
    })*/
    //POST a new blob
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        console.log('inside post');
       var fullname = req.body.fullname;
		var	address = req.body.address ;
		var	city = req.body.city ;
		var	pincode = req.body.pincode ; 
		var	email_address = req.body.email_address;
		var	mobile_number =req.body.mobile_number;
		  

		  var userData  =  user({
		fullname: fullname,
		address : address ,
		city : city ,
		pincode : pincode , 
		email_address : email_address,
		mobile_number : mobile_number,  	
		is_added : true ,
		is_modified : false , 
		is_deleted : false   
	});
    userData.save(function (err , user){
if(err) {
	console.log('error :::' + err);
} else {
	console.log('user created');
}
});
    });

module.exports = router;
