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
    alert('heel');
    var uname=document.getElementById('username');
    var passwrd=document.getElementById('password');
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var request=new XMLHttpRequest();
    request.open("POST","http://yatishhr.imad.hasura-app.io/newuser",true);
   request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                request.send(JSON.stringify({name:name,username:username,email:email,password:password}));
                window.open('GET','http://yatishhr.imad.hasura-app.io/login',true);
                alert('Registered successfully');
            }
            else{
                alert('Something went wrong');
                request.send(null);
            }
        }
   };
}