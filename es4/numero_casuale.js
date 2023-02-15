var numero= new Array(5);
 
function creation(){ 
    var i=0;
    var c=0
        do{
            var x=Math.floor(Math.random() * 5) + 1;
            console.log("x---"+x+"-----c-----"+numero [c]);
            do{
                console.log(1);
                if(x==numero [c]){
                    console.log ("FF");
                    c=5;
                }else{
                    console.log("a:"+numero);
                    if(c==4){
                        numero [i]=x;
                        i++;
                    }
                    c++;
                }
            }while (c<5);
        c=0;
        }while(i<5);
        $("#write").append(numero+"</br>");
        console.log(numero);  
    }


