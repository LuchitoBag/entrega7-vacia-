import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NavBar/NabVar';
import ItemListContainer from './components/NavBar/ItemListContainer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer';
import CartWidget from './components/NavBar/CartWidget';
import ItemDetail from './components/NavBar/ItemDetail';

function App() {
return (
  <Router>

  
  <div className="App">

  <NabVar/>

    <Switch>

  <Route exact path="/">
  <ItemListContainer greeting="Bienvenidos!"/>
  
  </Route>
  <Route path="/categoria/:idCategoria"component={ItemListContainer}>
  </Route>

  <Route exact path="/item/:idItem" component={ItemDetailContainer}></Route>
  
  <Route exact path="/cart" component={CartWidget}></Route>
  <Route path="/detalle/:idDetalle" component={ItemDetail}></Route>

  </Switch>
  </div>

  </Router>
)
}

export default App;
