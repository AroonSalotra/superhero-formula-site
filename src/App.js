

import Home from './Home';
import PageTwo from './PageTwo';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
      <Home />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/two">
        <PageTwo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
