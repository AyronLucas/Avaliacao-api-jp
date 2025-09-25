import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Dog from './pages/Dog'
import End from './pages/Page3'
import Home from './pages/Home'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dog />} />
        <Route path='/Page3' element={<End />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )


}

export default App
