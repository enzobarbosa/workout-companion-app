import './App.css';
import {
  BrowserRouter as Router,
   Route,
   Routes
} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import Exercices from './pages/Exercices'
import Auth from './pages/Auth'
import Muscles from './pages/Muscles'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
        <Header />
        <Routes>
          <Route exact path='/auth' element={<Auth/>} />
          <Route exact path='/exercices' element={<Exercices/>} />
          <Route exact path='/muscles' element={<Muscles/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  )
}

export default App;
