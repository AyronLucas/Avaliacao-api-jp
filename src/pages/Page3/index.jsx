import { Link } from "react-router-dom"

function End() {
    return (
        <>
            Agradecemos sua visita!
            <Link to='../App.jsx'>
                <button>
                   Voltar para API
                </button>
            </Link>
        </>
    )
}

export default End