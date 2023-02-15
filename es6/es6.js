function creation(){
    var alf=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var txt=document.getElementById("txt").value;
    txt=txt.split("");
    var txt=txt.reverse();
    
    for(var i=0; i<txt.length; i++){
        if(txt[i]!=txt[i].toUpperCase()){
            txt[i]=txt[i].toUpperCase();
        }else{
            for(var index=0; index<alf.length; index++){
                if(alf[index]==txt[i]){
                    var a=index+1;
                    txt[i]=alf[a];
                    index=alf.length++;
                }
            }
        }
    }
    var a="";
    for(var i=0; i<txt.length; i++){
        a=a+txt[i];
    }
    document.getElementById("write").innerText=a;    
}
