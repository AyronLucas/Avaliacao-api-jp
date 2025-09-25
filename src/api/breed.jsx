import api from "./api"

export const GetBreeds = async () => {
    const response = await api.get('/breeds')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.results
}   