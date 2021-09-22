
import Navbar from "react-bootstrap/Navbar" 
import NavDropdown from "react-bootstrap/NavDropdown" 
import CartWidget from "./CartWidget"
import "./NavBar.css" 
import esla from "./assets/images/esla.jpg"
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"





const NabVar=()=>{

  return(

    <Navbar>
        <Link exact to="/">
        <img className="esla" src={esla}></img> 
        </Link>


    <Navbar.Brand></Navbar.Brand>

   

   

      <Navbar className="menu">

        

            <NavDropdown.Item href="#action3" >Inicio</NavDropdown.Item>

          <Link exact to="/categoria/Buzos"  className="buzos2">

          <Nav className="buzos">Buzos</Nav>
          </Link>
          <Link exact to="/categoria/Remeras" className="remeras2">

          <Nav  className=" remeras" >Remeras</Nav>
          
          </Link>
          <NavDropdown.Item href="#">Contacto</NavDropdown.Item>

          
          
          <Link exact to="/cart"> <CartWidget/> </Link>
  </Navbar>

 


  </Navbar>
    

    

    
    )

}


export default NabVar
