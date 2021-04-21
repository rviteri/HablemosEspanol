import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import './App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Switch>
          <Route path="/" exact component={Home}></Route>
          {/* <Route path="/equipo" exact component={Team}></Route>
          <Route path="/contactanos" exact component={ContactUs}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
