import { useEffect, useState } from "react"
import { GetBreeds } from "../../api/breed"
import { Link } from "react-router-dom"     
import api from "../../api/api"

function Dog() {
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
        <Link to={'../Page3/index.jsx'}>
        <button>
                   Home
        </button>
        </Link>
         <Link to={'../Home/index.jsx'}>
        <button>
                   Page3
        </button>
        </Link>
        <div className="App">
            {breed.map(breed => (
                <div key={breed.id}>
                    <h1>{breed.name}</h1>
                    <img src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} />
                    <p>{breed.breed_group}</p>
                </div>
            ))}
        </div>
    
        
        </>
    )
}
export default Dog