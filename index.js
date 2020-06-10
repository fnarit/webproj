const	express		= require("express"),
	 	app			= express(),
	 	mongoose	= require("mongoose");

//setting
//mongoose.connect("mongodb://localhost/webdb"); 
app.set("view engine","ejs");  
app.use(express.json()) 
app.use(express.urlencoded())
app.use(express.static(__dirname + '/views'));

//route
app.get("/",function(req,res){
	res.render("index")
})

//listen
app.listen(3000,function(){
	console.log("Server Open");
})


///////////////////////////////////////
app.get("/",function(req,res){
  res.render("index");
})

app.get("/signup",function(req,res){
	res.render("signup");
})

app.get("/signin",function(req,res){
	res.render("signin");
})

app.get("/user",function(req,res){
	res.render("user");
})
