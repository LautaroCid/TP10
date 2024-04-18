function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function myFuncion3(){
    con=[],dir=[],b=[0,0,0,0];
    let a,c=0;

    for(i=0;i<18;i++){
       a=getRandomInt(361);
       dir[i]=a;
       
       if(a<=135 && a>=45){
           con[i]='N';
           b[0]=b[0]+1;
       }

       if(a>=135 && a<=225){
           con[i]='O';
           b[1]=b[1]+1;
       }

       if(a<=315 && a>=225){
           con[i]='S';
           b[2]=b[2]+1;
       }

       if(a<=45 || a>=315){
           con[i]='E';
           b[3]=b[3]+1;
       }
       
    }

    for(i=0;i<12;i++){ 
        if(con[i]=='N' && con[i+1]=='O' && con[i+2]=='S' && con[i+3]=='E'){
            c=c+1;

        }

        if(con[i]=='O' && con[i+1]=='S' && con[i+2]=='E' && con[i+3]=='N'){
            c=c+1;
        }

        if(con[i]=='N' && con[i+1]=='E' && con[i+2]=='S' && con[i+3]=='O'){
            c=c+1;
        }

        if(con[i]=='E' && con[i+1]=='S' && con[i+2]=='O' && con[i+3]=='N'){
            c=c+1;
        }

        if(con[i]=='S' && con[i+1]=='O' && con[i+2]=='N' && con[i+3]=='E'){
            c=c+1;
        }

        if(con[i]=='E' && con[i+1]=='N' && con[i+2]=='O' && con[i+3]=='S'){
            c=c+1;
        }

        if(con[i]=='S' && con[i+1]=='E' && con[i+2]=='E' && con[i+3]=='O'){
            c=c+1;
        }

        if(con[i]=='O' && con[i+1]=='N' && con[i+2]=='E' && con[i+3]=='S'){
            c=c+1;
        }

    }

    for(i=0;i<4;i++){
        b[i]=(b[i]*100)/18;
        b[i]=Math.floor(b[i]);
    }

    alert("Cordenadas: "+con);
    alert("Angulos: "+dir);
    alert("Cantidad de Vueltas: "+c);
    alert("Norte: "+b[0]+"%. Oeste: "+b[1]+"%. Sur: "+b[2]+"%. Este: "+b[3]+"%.");
}