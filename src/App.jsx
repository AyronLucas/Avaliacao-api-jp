import { useState, useEffect } from 'react'
import api from '../api/api'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [breed, setBreeds] = useState([])


  useEffect(() => {
    async function loadBreeds() {
      const response = await api.get('/breeds')
      console.log(response.data)
      setBreeds(response.data)
    }
    loadBreeds()
  }, [])
  return (
    <>
    <Header />
    <div className="App">
      {breed.map(breed => (
        <div key={breed.id}>
          <h1>{breed.name}</h1>
          <img src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} />
          <p>{breed.breed_group}</p>
        </div>
      ))}
    </div>
    
    <Footer/>
</>
  )


}

export default App
