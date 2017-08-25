//window.onload=function(){
//var button=document.getElementById('btn1');

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
                alert('Registered successfully \n Go back and login');
                        window.open('GET','http://yatishhr.imad.hasura-app.io/login',"_blank");
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
        window.open('GET','http://yatishhr.imad.hasura-app.io/login',"_blank");
}
}

function login(){
    var request=new XMLHttpRequest();
    var username=document.getElementById('loginbtn').value;
    var password=document.getElementById('passbtn').value;
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
    
}

