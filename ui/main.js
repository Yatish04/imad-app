window.onload;
var button=document.getElementById('btn1');

button.onclick=function() {
    var request= new XMLHttpRequest();
   request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
               alert('hello'); 
            }
        }
    }
    request.open('GET','http://yatishhr.imad.hasura-app.io/new',true);
}