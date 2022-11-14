import { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api_pet_costume from '../../../../stores/api-pet-costume'

const api = api_pet_costume()

const PetFormList = () => {
   
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        onLoadingApi()
    }, [])
    
    const onLoadingApi = () => {
        api.list()
        .then((response:any)  => {
            setPets(response.data)
            console.log(response.data)
        })
        .catch((e:any) => {
            console.log(e)
        })
    }
    
    return (
        <div>
            <div className='col-4 mb-5 shadow-sm'>
                <Link className="btn btn-success nav-link rounded-pill border-end-3" to={`/pet/add-pet`}><i className='bi bi-twitter text-white' aria-hidden></i><span className='ms-2 text-white'>Novo</span></Link>
            </div>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Aniversário</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Dono</th>
                        <th scope="col">Operação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets && pets.map((pet:any, index: number) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{pet.id}</td>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>{pet.birthday}</td>
                                <td>{pet.age}</td>
                                <td>{pet.genre}</td>
                                <td>{pet.person_id}</td>
                                <td scope='row'>
                                    <div className='row'>
                                        <Link className="nav-link col-4" to={`/pet/show-pet/${pet.id}`}><i className='bi bi-eye text-primary' aria-hidden></i></Link>
                                        <Link className="nav-link col-4" to={`/pet/update-pet/${pet.id}`}><i className='bi bi-pencil text-warning' aria-hidden></i></Link>
                                        <Link className="nav-link col-4" to={`/pet/destroy-pet/${pet.id}`}><i className='bi bi-trash text-danger' aria-hidden></i></Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }         
                </tbody>
            </table>
        </div>
    )
}
  
export default PetFormList