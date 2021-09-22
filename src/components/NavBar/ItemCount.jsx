import { useState }  from 'react'
import { Link } from 'react-router-dom'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const[cambiarBoton,setCambiarBoton] = useState(true)
    
    function sumar (){
        setCount(count + 1 )
        
    }
    function restar(){
        setCount(count -  1)
    }
    const agregarCarrito= ()=> {
        onAdd(count)
        setCambiarBoton (false)
    }    


    

    return (
        <div>

            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button><br/>
            {cambiarBoton ?
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
            :
            <div>
                <Link to={"/cart"}>
                    <button>Terminar Compra</button>    
                </Link>
                <Link to={"/"}>
                <button>Seguir Comprando</button>
                </Link>
                </div>    
        
        
        }
        

         </div>
        

        


    )

    
}
export default ItemCount