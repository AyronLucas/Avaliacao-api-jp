import { Link } from "react-router-dom"

function Home() {
    return (
        <>
           BEM VINDOS A API THE DOG
            <Link to='../Dog/index.jsx'>
                <button>
                    Navegar para API
                </button>
            </Link>
        </>
    )
}

export default Home