import Home from './pages/Home/Home';
import Music from './pages/Music'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/music'>
        <Music/>
      </Route>
    </Switch>
  );
}

export default App;
