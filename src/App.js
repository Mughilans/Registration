import './App.css';
import Register from './Register';
import Checker from './Checker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Checker}></Route>
          <Route exact path='/register' component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
