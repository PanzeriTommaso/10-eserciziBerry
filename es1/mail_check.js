function check(){
    var mail=document.getElementById("txt").value;
    console.log(document.getElementById("txt").value);
    var c = mail.lastIndexOf("@");
    var p= mail.lastIndexOf(".");
    console.log("p="+p);
    console.log("c="+c);
        if(c<=0 || p<c){
            document.getElementById("write").innerText="la mail non è valida";    
        }else{   
            document.getElementById("write").innerText="la mail è valida"; 
        }
}
