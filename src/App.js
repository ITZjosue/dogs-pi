// REACT ROUTER
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//COMPONENTS
import Home from './pages/Home'
import Dogs from './pages/Dogs'
import AddDog from './pages/AddDog'
import DogInfo from './pages/DogInfo'
// HOOKS
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ROUTES
import {  DOGS, dogs, add } from './routes'
// GLOBAL STYLES
import { GlobalStyle } from './GlobalStyle'
import NavBar from './components/NavBar'
import { useState } from 'react'
// FUNCTIONS
import { getDataFromApi } from './controllers'

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
      getDataFromApi(dispatch,setLoading)
  },[dispatch])

  return (
    <Router>
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route 
          path='/' 
          element={<Home dogs={dogs}/>}
        />
        <Route 
          path={dogs} 
          element={<Dogs DOGS={DOGS} dispatch={dispatch} loading={loading} setLoading={setLoading}/>}
        />
        <Route 
          path={add} 
          element={<AddDog dispatch={dispatch}/>} 
        />
        <Route 
          path={`${dogs}/:idDog`} 
          element={<DogInfo DOGS={DOGS} dispatch={dispatch} loading={loading} setLoading={setLoading}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
