import { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import api_pet_costume from '../../../../stores/api-pet-costume'

const api = api_pet_costume()

export default class PetFormShow extends Component {

    state = { pet: { id: null, name: "", type: "", birthday: null, age: null, gender: "" } }

    componentDidMount(): void {
        const { id } = useParams()
        console.log(id)
        this.onLoading(4)
    }    

    onLoading(id: any){
        api.show(id)
        .then((response:any)  => {
            this.setState({
                pet: response.data
            })
            console.log(response.data)
        })
        .catch((e:any) => {
            console.log(e)
        })
    }
    
    render(){
        const { pet } = this.state

        return (
            <div className="col-lg-6 col-xl-12">
                <div className="card mb-5 mb-xl-0 shadow-sm rounded">
                    <div className="card-body p-5">
                        <div className="small text-uppercase fw-bold text-muted">pet</div>
                        <div className="mb-3">
                            <span className="display-4 fw-bold">{pet.id}</span>
                            <span className="text-muted">Id</span>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>                                            
                                <span>Nome: <strong>{pet.name}</strong></span>
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Tipo: <strong>{pet.type}</strong></span>           
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Aniversário: <strong>{pet.birthday}</strong></span>  
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Idade: <strong>{pet.age}</strong></span>    
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Sexo: <strong>{pet.gender}</strong></span>
                            </ol>
                        </ul>
                        <div className="d-grid gap-3">
                            <div className=''>
                                <div className="row">
                                    <Link className="nav-link btn btn-warning rounded-pill col-5 ms-3 me-3"
                                            to={`../update-pet/${pet.id}`}>
                                        <i className='bi bi-pencil text-white' aria-hidden></i>
                                        <span className='ms-2 text-white'>Editar</span>
                                    </Link>
                                    <Link className="nav-link btn btn-danger rounded-pill col-5 ms-3"
                                            to={`../destroy-pet/${pet.id}`}>
                                        <i className='bi bi-trash text-white' aria-hidden></i>
                                        <span className='ms-2 text-white'>Deletar</span>
                                    </Link>
                                </div>
                                <Link className="btn nav-link rounded-pill border-primary mt-3 form-control" 
                                        to={"../view-pets"}>
                                    <i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
                                    <span className='ms-2 text-primary'>Voltar</span>
                                </Link>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   