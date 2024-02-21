import './App.css'
import './assets/css/base.css'

import Home from './pages/home'
import Sobre from './pages/sobre'
import Erro from './pages/erro'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route component={Erro} />
      </Switch>
    </Router>
  )
}

export default App;

// function App() {
//   const Router = () => {
//     const location = window.location.pathname
    
//     if(location === '/sobre')
//     {
//       return <Sobre />
//     } else {
//       return <Home />
//     }
//   }
//   return (
//     <div className='App'>
//       { Router() }
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <Home />
//       <Sobre />
//        <Error />          
//     </div>
//   )
// }

