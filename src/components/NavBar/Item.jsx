import ItemCount from './ItemCount'
import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <>
            <div key={producto.id} className="card w-70 mt-4">
              <div className="card-header">{producto.name}</div>
              <div className="card-body">
                  <img src={producto.picture} className="Imagen1"/>
                  </div>  
                <div className="card-footer">
                <Link to={`/detalle/${producto.id}`} className="btn btn-outline-primary btn-block">
                 Detalles
               </Link>
                </div>
                <div> <ItemCount initial={1} stock={5} /> </div>
                
                
                
        </div>

</>
    )
}
export default Item





        



        

          







