function found(){
    var text=document.getElementById("txt").value;
    console.log(text);
    var positionlast = text.lastIndexOf("zip");
    var positionone = text.indexOf("zip");
    var x = text.split("zip");
    console.log("x: "+x);
    console.log("ultima posizione: "+positionlast+" prima posizione:  "+positionone);

    if(positionlast!=positionone){
        document.getElementById("write").innerText=positionlast;  
    }else{
        document.getElementById("write").innerText="-1"; 
    }
}