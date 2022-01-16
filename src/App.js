import './App.css';
import {
  BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import Exercices from './pages/Exercices'
import Auth from './pages/Auth'
import Muscles from './pages/Muscles'
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Muscle from './pages/Muscle';
import Workout from './pages/Workout';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
        {/* <Header />
        <Routes>
          <Route exact path='/auth' element={<Auth/>} />
          <Route exact path='/exercices' element={<Exercices/>} />
          <Route exact path='/muscles' element={<Muscles/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes> */}
        {/* </AuthProvider> */}
        <CartProvider>
          <AuthProvider>
            <Header />
            <Cart />
            <Switch>
              <Route path='/cancel'>
                <Cancel />
              </Route>
              <Route path='/success'>
                <Success />
              </Route>
              <Route path='/workout'>
                <Workout />
              </Route>
              <Route path='/muscle/:id'>
                <Muscle />
              </Route>
              <Route path='/auth'>
                <Auth />
              </Route>
              <Route path='/muscles'>
                <Muscles />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </AuthProvider>
        </CartProvider>
      </Router>
    </div>
  )
}

export default App;
