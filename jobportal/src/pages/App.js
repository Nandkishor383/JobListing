

import { Route, Switch } from 'react-router';
import { Header } from '../components/Header';
import { Home } from './Home';
import { Jobs } from './Jobs';

function App() {
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/jobs" component={Jobs} />
      
      </Switch>
    </div>
  );
}

export default App;
