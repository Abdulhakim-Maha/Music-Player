import Home from './pages/Home/Home';
import Music from './pages/Category/Category'
import Play from './pages/Play/Play'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/category'>
        <Music/>
      </Route>
      <Route path='/play'>
        <Play/> 
      </Route>
    </Switch>
  );
}

export default App;
