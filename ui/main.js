window.onload=function(){
var request=new XMLHttpRequest();
   request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
               var nwtxt=request.responseText;
               var chnge=document.getElementById('commentsection');
               chnge.innerHTML=nwtxt.toString();
               
            }
            else{
                alert('wrong');
            }
        }
    };
request.open('GET','http://yatishhr.imad.hasura-app.io/getcomments',true);
    request.send(null);


};
//button.onclick=function() {
  //  var request= new XMLHttpRequest();
    //request.open('GET','http://yatishhr.imad.hasura-app.io/new',true);
    //request.send(null);
   //request.onreadystatechange=function(){
     //   if(request.readyState===XMLHttpRequest.DONE){
       //     if(request.status===200)
         //   {
           //    alert('hello'); 
            //}
//            else{
  //              alert('wrong');
    //        }
      //  }
    //}

//}
//}
function fun2(){
    window.open("http://yatishhr.imad.hasura-app.io/login", "_self");
}
function fun1(){
    window.open("http://yatishhr.imad.hasura-app.io/new", "_self");
}
function btn(){
    var request=new XMLHttpRequest();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
   request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                alert("registered\n please login");
            }
            else{
                alert('Something went wrong');
            }
        }
   };
   request.open('POST','http://yatishhr.imad.hasura-app.io/newuser',true);
   request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username:username,password:password,name:name,email:email}));
if(request.status===200){
    console.log('successful');
        window.open('http://yatishhr.imad.hasura-app.io/login',"_blank");
}
}

function login(){
    var request=new XMLHttpRequest();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                alert('login successful');
            }
            else{
                alert('invalid credentials');
            }
            
    }
    };
    request.open("POST",'http://yatishhr.imad.hasura-app.io/newlogin',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    
}

function sub(){
    
    var request=new XMLHttpRequest();
    var text=document.getElementById('comment').value+'<hr>';
    //console.log(text);
    request.onreadystatechange=function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status===200){
                    var newtext=request.responseText;
                    var dive=document.getElementById('commentsection');
                    dive.innerHTML=newtext.toString();
                }
                else{
                    console.log('error1');
                }
            }
             else{
                    console.log('error2');
                }
    };
    
    
    request.open('POST','http://yatishhr.imad.hasura-app.io/comments',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({usertext:text.toString()}));
}



