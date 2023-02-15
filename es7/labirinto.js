function labirinto(a){
    console.log(a);
    var lab = [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                   [1, 3, 0, 0, 1, 0, 0, 0, 0, 1],
                   [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
                   [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                   [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                   [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                   [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                   [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
                   [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                   [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
                ];
    if(a=="b"){
        console.log("reset");
        
        }else if(a=="w"){
            window.localStorage.getItem(lab);
            console.log("su");
            for(var r=0; r<lab.length; r++){
                for(var c=0; c<lab.length; c++){
                    if(lab[r][c]==2){
                        if(lab[r-1][c]==0){
                            console.log("riga: "+r+"colonna: "+c);
                            lab[r-1][c]=2;
                            lab[r][c]=0;
                        }else if(lab[r-1][c]==1){
                            document.getElementById("labirinto").innerText="GAME OVER"
                            lab[r-1][c]=99;
                        }else{
                            document.getElementById("labirinto").innerText="ESOTICO";
                            lab[r-1][c]=99;
                        }
                    } 
                }
            }  
            window.localStorage.setItem(lab);
    }else if(a=="s"){
        console.log("giu");
    }else if(a=="d"){
        console.log("destro");
    }else if(a=="a"){
        console.log("sinistra");
    }
    for(var r=0; r<lab.length; r++){
        $("#labirinto").append(lab[r]+"</br>");       
    }
}
