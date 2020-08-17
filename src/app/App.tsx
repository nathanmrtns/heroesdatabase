import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Business domain imports
import CharacterContainer from '../components/CharacterContainer/CharacterContainer';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterContainer}/>
        <Route path="/character/:id" component={CharacterDetails}/>
      </Switch>
    </Router>
  )
};

export default App;
