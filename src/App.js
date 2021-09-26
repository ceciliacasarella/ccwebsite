import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import ContactMePage from './pages/contactme';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component= {Home} exact></Route>
        <Route path="/contactme" component= {ContactMePage} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
