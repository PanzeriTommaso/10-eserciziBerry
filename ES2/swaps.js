
function count(){
    var zeriuno=0;
    var uniuno=0;
    var zeridue=0;
    var unidue=0;
    var uno=document.getElementById("first").value;
    var due=document.getElementById("second").value;
    var lu = uno.length;
    var ld = due.length;
    var control=0;
    if (lu==ld){
        var au =uno.split("");
        var ad =due.split("");
     
        for(var i=0; i<ld; i++){
     
            if(au[i]==0){
                zeriuno ++; 
            }else if(au[i]==1){
                uniuno ++;
            }else{
                i=ld+1;
                control=7;
            }
            
            if(ad[i]==0){
                zeridue ++; 
            }else if(ad[i]==1){
                unidue ++;
            }else{
                i=ld+1;
                control=7;
            }
        }
        if (control==7){
            document.getElementById("n").innerText="!! GLI INPUT NON SONO BINARI !!"; 
        }
     var s=0;
        if(zeridue==zeriuno||unidue==uniuno||i>ld){
            for(i=0; i<ld; i++){
                if(au[i]!=ad[i]){
                    if(au[i]==1){
                        s++;
                        var d=i+1;
                        au[d]=1;
                        au[i]=0;
                    }
                }
            }
            
            document.getElementById("n").innerText=" per pareggiare i numeri binari servono "+s+"swaps";
        }else{
            document.getElementById("n").innerText="!! GLI INPUT NON SONO VALIDI !!";
        }
      
    }else{
        document.getElementById("n").innerText="!! GLI INPUT NON SONO VALIDI !!";
    }
}