const produ:{produto:string,lote:number,ano:number,qtd:number}=    {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const res=(produt:{produto:string,lote:number,ano:number,qtd:number}) =>{
    let list:string []=[];
 for (let i=1;i<=produt.qtd;i++){
    list.push(`${produt.lote}-${produt.ano}-${i.toString().padStart(3,'0')}`)
 }
 
 return list
}
console.log(res(produ))