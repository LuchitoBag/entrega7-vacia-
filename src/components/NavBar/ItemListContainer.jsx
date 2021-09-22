
import { useState,useEffect } from 'react'
import { getFetch, } from './utils/mock'
import ItemList from './ItemList'
import { useParams } from 'react-router'



function ItemListContainer({greeting}) {
        
    const [productos, setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const {idCategoria}= useParams ()



    
      

    useEffect(()=>{

        if (idCategoria){

            getFetch
            .then(respuesta=> {
                setProductos( respuesta.filter(prod => prod.categoria === idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

    }else{
        
        getFetch
        .then(respuesta=> {
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    
    }
    


    },[idCategoria])

 return(
    <div>
        <h1>{greeting}</h1>

        { loading ? <h2>Cargando...</h2>: <ItemList productos={productos}/> }
       
           
            </div>
)
}
export default ItemListContainer