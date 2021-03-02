import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Patrocinadores from './Pages/Patrocinadores';
import Nosotros from './Pages/Nosotros';
import Inicio from './Pages/Inicio';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>

        <div className="container mt-5">
          <div className="btn-group">
            <Link to="/" className="btn btn-dark active">
              Inicio
            </Link>
            <Link to="/nosotros" className="btn btn-dark" >
              Nosotros
            </Link>
            <NavLink to="/patrocinadores" className="btn btn-dark"  >
            Patrocinadores
            </NavLink>
          </div>
          <hr/>
          <Switch>
         
            <Route path="/patrocinadores">
              <Patrocinadores/>
            </Route>
            <Route path="/nosotros">
              <Nosotros/>           
            </Route>
            <Route path="/" exact>
              <Inicio/>
            </Route>
          </Switch>
        </div>
        <Footer/>
   </Router>
   </>
  );
}

export default App;
