const usuario: {
    nome: string;
    idade: number;
    status: boolean;
}[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];


const filtraUsuario= ( usuario :{
    nome: string;
    idade: number;
    status: boolean;
}[],pesquisar:string):  {
    nome: string;
    idade: number;
    status: boolean;
}[]=>{
    const result=usuario.filter((usu)=>{
return usu.nome.toLowerCase().includes(pesquisar.toLowerCase())
    });

    return result;

 
};

console.log(filtraUsuario(usuario,'jo'))