# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





  useEffect(() => {
    async function loadBreeds() {
      const response = await api.get('/breeds')
      console.log(response.data)
      setBreeds(response.data)
    }
    loadBreeds()
  }, {})
  return (
   <div className="App">
    {breed.map => (
      
    )}
   </div> 
   
  )
  


  
  
  
  
    async function list() {
    const loadBreeds = await setBreeds()

    return loadBreeds.map(breed =>
      <div className='card char' key={breed.id}>
        <img src={breed.image} alt={`Foto de ${breed.name}`} />
        <h2>{breed.name}</h2>
        <div className='char-info'>
        </div>

    </div>
    )
  }

  useEffect(() => {
    async function carregar() {
      setBreeds(
        await list()
      )
    }
    carregar()
  }, [])