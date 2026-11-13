export {}
type T_email=`${string}@${string}.${string}`
type T_adress=`${string} ${number}`
type T_zipcode=`${number}-${number}`
type T_website=`${string}.${string}`

interface i_users{
    id:number,
    name:string,
    username:string,
    email:T_email,
    adress:I_Adress,
    phone:string,
    website:T_website,
    company:I_Company

} 

interface I_Adress{
    street:string,
    suite:T_adress,
    city:string,
    zipcode:T_zipcode,
    geo:I_Geo

}

interface I_Geo{
    lat:number,
    lng:number
}

interface I_Company{
    name:string,
    catchPhrase:string,
    bs:string
}

async function obtenerUsers(id:number):Promise<i_users> {
    const URL= `https://jsonplaceholder.typicode.com/users?id=${id}`
    let respuesta:Response= await fetch(URL)
    let data= await respuesta.json() as i_users
    return data;
}

const usuariosApi:i_users=await obtenerUsers(1)

console.log(usuariosApi.adress.geo.lat)
