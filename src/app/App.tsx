import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Business domain imports
import CharacterContainer from '../pages/CharactersSearch';
import CharacterDetails from '../pages/CharacterDetails';

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterContainer}/>
        <Route path="/character/:charId" component={CharacterDetails}/>
      </Switch>
    </Router>
  )
};

export default App;
