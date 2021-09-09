import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Inserimento from './components/Inserimento';
import Lista from './components/Lista';
import Update from "./components/Update";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init(
    {}
  )
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/inserimento' component={Inserimento} />
          <Route exact path='/lista' component={Lista} />
          <Route exact path='/update' component={Update} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
