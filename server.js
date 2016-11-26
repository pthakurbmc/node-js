var express = require('express');
var bp = require('body-parser');

var app = express();
app.use(bp.json());
var taskid=1;

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

app.get('/todos/:id', function(req,res){
	var todoId=parseInt(req.param.id,10);

	
var matchedTodo;
	
task.forEach(function(todo) {
	if(todoId===todo.id) {
		matchedTodo=todo;
	}
}

if(matchedTodo){
	res.json(matchedTodo);
}else{
	res.status(404).send();
}
);

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