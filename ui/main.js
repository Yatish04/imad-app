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
    var uname=document.getElementById('username');
    var passwrd=document.getElementById('password');
    var name=document.getElementById('name');
    var email=document.getElementById('email');
   request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                window.open('POST','http://yatishhr.imad.hasura-app.io/login',true);
                alert('Registered successfully');
            }
            else{
                alert('Something went wrong');
            }
        }
   };
   request.open('GET','http://yatishhr.imad.hasura-app.io/newuser',true);
   request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({name:name,username:uname,email:email,password:passwrd}));

}