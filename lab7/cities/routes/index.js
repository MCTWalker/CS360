var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('lab6.html', { root: 'public' });
});
router.get('/getcity',function(req,res,next) {
	var myRe = new RegExp("^" + req.query.q);
    console.log(myRe);
	var jsonresult = [];
   
    console.log(jsonresult);
	fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
        if(err) throw err;
		console.log("Made it here");
        var cities = data.toString().split("\r\n");
        for(var i = 0; i < cities.length; i++) {
			var result = cities[i].search(myRe); 
			if(result != -1) {
				//console.log("One of the cities was:" + cities[i]);
				jsonresult.push({city:cities[i]});
			} 
        }
		console.log(jsonresult);
		res.status(200).json(jsonresult);
    })
    console.log("In getcity route");
	
});
module.exports = router;
