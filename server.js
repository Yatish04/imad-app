var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var app = express();
var bodyparser=require('body-parser');
app.use(morgan('combined'));
app.use(bodyparser.json());

var config={
    user: 'yatishhr',
    database: 'yatishhr',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
app.get('/new',function(req,res){
    res.sendFile(path.join(__dirname,'ui','new.html'));
});
app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'ui','login.html'));
});
app.get('/new.css',function(req,res){
    res.sendFile(path.join(__dirname,'ui','new.css'));
});

function hash(password,salt){
    var hashed=crypto.pbkdf2Sync(password,salt,1000,512,'sha512');
    return ["pbkdf2","1000",salt,hashed.toString('hex')].join('$');
}


app.post('/newuser',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var hashed=hash(password,salt);
    Pool.query('INSERT INTO "user" (username,password,name,email) ($1,$2,$3,$4)',[username,password,name,email],function(err,res){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send('uaer created successfully');
        }
    });
    
});




var pool=new Pool(config);
 app.get('/test',function(req,res){
     pool.query('SELECT *FROM content',function(err,result){
         if(err)
         {
             res.status(500).send(err.toString());
         }
         else
         {
             res.send(JSON.stringify(result.rows));
         }
     })
 })

createtemplate=function(data){
    
}



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
