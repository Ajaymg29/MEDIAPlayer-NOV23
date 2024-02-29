import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Footer from './components/Footer'
import Header from './components/header'

function App() {

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
