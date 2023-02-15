function creation(){
    var x=document.getElementById("txt").value;
    console.log(x);
    var alf=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var x=x.toUpperCase();
    var x=x.split("");
    for(var i=0; i<alf.length; i++){
        console.log("1");
        if(alf[i]==x[0]){
            console.log("2");
            for(var index=0; index<x.length; index++){
                console.log("AA"+x[index]);
                console.log("BB"+alf[i+index]);
                if(x[index]==alf[i+index]){
                    console.log("4");
                    document.getElementById("txt").innerText="VV";
                }else{
                    console.log(alf[i+index]);
                    document.getElementById("write").innerText=alf[i+index];  
                }
            }
        }
    }
    document.getElementById("txt").innerText="alf[i+index]";  
}
