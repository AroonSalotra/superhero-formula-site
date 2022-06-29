

import Home from './Home';
import PageTwo from './PageTwo';
import Navbar from './Navbar';
import ViewProducts from './ViewProducts';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
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

      <Switch>
        <Route exact path="/products">
          <ViewProducts  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
