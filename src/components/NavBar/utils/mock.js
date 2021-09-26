import "./Img.css";

export const productos=[
    {id:1, name:"Remera Lacoste",categoria:"Remeras",detalle:"Remera Lacoste color Pastel " ,picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/145204125_237455387953768_6709928529960162273_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gPm93G6u_YgAX_TGe1A&tn=Z14wTvK2VbuUp9Dv&_nc_ht=scontent.fcor2-2.fna&oh=8dc2d8893f000286f3c3afd8d1ba5753&oe=616B01BC"},
    {id:2, name:"Remera Penguin",categoria:"Remeras",detalle:"Remera Penguin  ",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/144102513_235586961473944_3046347032099697614_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=ze5-R6w8EisAX_Mg2gi&_nc_ht=scontent.fcor2-2.fna&oh=b380ccac4ccdf67fe21048aeccfaa79b&oe=6168DA5C"},
    {id:3, name:"Buzo Tommy Hilfiger",categoria:"Buzos",detalle:"Buzo Tommy Hilfiger canguro color gris",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/143498300_234299764935997_6281457520752145481_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=JMZ4Aeu36foAX9yeKUC&tn=Z14wTvK2VbuUp9Dv&_nc_ht=scontent.fcor2-2.fna&oh=de0f077a86d221027283901fa2d68168&oe=616A52B2"},
    {id:3, name:"Buzo Tommy Hilfiger",categoria:"Buzos",detalle:"Buzo Tommy Hilfiger azul",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/118988514_165873548445286_8419069982474427627_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=DNlr0nos-5IAX9ZTxxw&_nc_ht=scontent.fcor2-2.fna&oh=12bee200457a4ae7243c0fae1292b6b3&oe=616D22F6"},
    ]
    
   export const getFetch = new Promise((resolve, reject) => {


        let respuesta = "200"
        if (respuesta === "200"){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject("404")
        }
    })
    
    const producto = {
        id:3,
        name: "Buzo Tommy Hilfiger"
    }

    export const getFetchUno = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(producto)
        },2000)

    })