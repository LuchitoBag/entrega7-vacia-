import React from 'react'
import ItemCount from "./ItemCount"
import {useState} from "react"


const ItemDetail = ({item}) => {

const [,setCantidadSeleccionada] = useState(0) 

const onAdd = (cant)=>{

    setCantidadSeleccionada (cant)
}

    return (
        <div>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h2>{item.detalle}</h2>
            <img src={item.picture} alt=""/>
            <ItemCount initial={0} stock={5} onAdd={onAdd} /> 
        </div>
    )
}

export default ItemDetail
