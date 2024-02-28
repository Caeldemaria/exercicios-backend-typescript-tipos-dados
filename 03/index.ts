const numeros:number[]=[1, 5, 2];

const tabuada=(numeros:number[])=>{
   let resultado:string=''
for(let n of numeros){
    for(let i=1;i<=10;i++){
         resultado +=`${n} x ${i} = ${n*i} \n`;
    if(i===10){
        resultado+= '------------------ \n'
    }
    
        }
   }
return resultado

    
}






console.log(tabuada(numeros))
