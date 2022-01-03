import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Store from './Components/Store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  return (
    <>
<Router>
      <Navbar />
        <Switch>
          <Route  exact path="/home">
        <Home/>
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/store">
            <Store />
          </Route>

        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
