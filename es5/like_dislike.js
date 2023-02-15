var stato;
function like(a){
    if(a=="like"){
        if(stato=="like"){
            document.getElementById("like").style.background=""
            document.getElementById("stato").innerText="stato";
        }else{
        document.getElementById("like").style.background="#008000";
        document.getElementById("dislike").style.background="";
        stato="like";
        document.getElementById("stato").innerText=stato;
        document.getElementById("stato").innerText="stato="+stato; 
    }
    }else{
        if(stato=="dislike"){
            document.getElementById("dislike").style.background="";
            document.getElementById("stato").innerText="stato"
        }else{
        document.getElementById("dislike").style.background="#f00";
        document.getElementById("like").style.background="";
        stato="dislike";
        document.getElementById("stato").innerText="stato="+stato;
    }   
    }
}