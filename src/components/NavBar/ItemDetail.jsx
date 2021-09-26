import React, {useState} from 'react'
import ItemCount from "./ItemCount"
import  {productos} from './utils/mock'

const ItemDetail = () => {


const [cantidadSeleccionada,setCantidadSeleccionada] = useState(0) 

    return (
        <div>
            <h1>{productos[0].id}</h1>
            <h2>{productos[0].name}</h2>
            <h2>{productos[0].detalle}</h2>
            <img src={productos[0].picture} alt=""/>
            <ItemCount initial={0} stock={5}  setCantidadSeleccionada={setCantidadSeleccionada}/> 
        </div>
    )
}

export default ItemDetail
