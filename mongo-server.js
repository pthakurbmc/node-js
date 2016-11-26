var express = require('express');
var bp = require('body-parser');
var _ = require('underscore');

var MongoClient=require('mongodb').MongoClient

var app = express();
app.use(bp.json());
var db;
var taskid=1;

MongoClient.connect('mongodb://admin:admin@ds111178.mlab.com:11178/pravdb', (err,database) => {
	if(err) return console.log(err)
})
app.use(express.static('public'));

var mytasks = [

	{
		description: "Go to Market.",
		completed: true	
	},
	
	{
		description: "Watch movie.",
		completed: false
	},
	{
		description: "Meet friends.",
		completed: true	
	}
]





app.get('/getmytask', function(req,res)
{
	res.json(mytasks);
});

app.post('/pushmytask', function(req,res)
{
	var data= req.body;
	data.id=taskid++;
	mytasks.push(data);
	res.json(data);
	
});

app.listen(3000, function() {
	
	console.log('Application is running on port 3000');
	
});