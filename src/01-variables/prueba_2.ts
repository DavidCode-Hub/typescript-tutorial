let ar:number[] = [7, 4.5, 9.25, 6, 3, 8, 10, 5.5];


type accn ={sobresaliente:number,notable:number,suficiente:number,insuficiente:number};

let accn1:accn = {sobresaliente:0,notable:0,suficiente:0,insuficiente:0};

ar.reduce((acc,art)=>{return art>=9?accn1.sobresaliente++:art>=7&&art<9?accn1.notable++:art>=5&&art<7?accn1.suficiente++:art<5?accn1.insuficiente++:acc})
console.log(accn1);



