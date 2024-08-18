<<<<<<< HEAD
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = () =>{
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/filme/:id' component={Filme}/>
        <Route exact path='/favoritos' component={Favoritos}
        />
        <Route  path='*' component={Erro}/>
      </Switch>
    </BrowserRouter>
  )
}

=======
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = () =>{
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/filme/:id' component={Filme}/>
        <Route exact path='/favoritos' component={Favoritos}
        />
        <Route  path='*' component={Erro}/>
      </Switch>
    </BrowserRouter>
  )
}

>>>>>>> c7faed0c4e950cd899492d94cdd81fcf400658d6
export default Routes;