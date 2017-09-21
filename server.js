var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto=require('crypto');
var app = express();
var bodyParser=require('body-parser');
app.use(morgan('combined'));
app.use(bodyParser.json());

var config={
    user: 'yatishhr',
    database: 'yatishhr',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};

var pool=new Pool(config);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
app.get('/main.js',function(req,res){
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
    var hashed=crypto.pbkdf2Sync(password,salt,10000,512,'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}

app.get('/createuser',function(req,res){
    var salt=crypto.randomBytes(128).toString('hex');
    var dbstring=hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username,dbstring],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send("user created successfully");
        }
    });
});

app.post('/newuser',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var name=req.body.name;
    var email=req.body.email;
    var salt=crypto.randomBytes(128).toString('hex');
    var hashed=hash(password,salt);
    pool.query('INSERT INTO "user" (username,password,email,name) VALUES ($1,$2,$3,$4)',[username,hashed,email,name],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            return res.redirect('/login');
        }
    });
    
});


app.post('/newlogin',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    pool.query('SELECT * FROM "user" WHERE username = $1',[username],function(err,result){
        if(err){
            res.send('Error');
        }
        else{
            if(result.rows.length===0){
                res.status(500).send('Invalid credentials');
                
            }
            else{
                var pass=result.rows[0].password;
                var salt=pass.split('$')[2];
                var hasht=hash(password,salt);
                if(hasht===pass){
                    res.send("credentials are correct");
                }
                else{
                    res.send(403).send('credentials are incorrect');
                }
            }
        }
        
    });
    
});




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
