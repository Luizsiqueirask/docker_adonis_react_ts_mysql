import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api_pet_costume from '../../../../stores/api-pet-costume'

const api = api_pet_costume()
const currentId = 1

export default class PetFormDestroy extends Component {

    state = {
        pet: { id: null, name: "", type: "", birthday: null, age: null, gender: "" },
        currentId: null
    }
    
    // Loading data from api by Id to show in frontend.

    componentDidMount(): void {
        this.onLoadingApi()
    } 

    onLoadingApi(){
        api.show(currentId)
        .then((response:any) => {
            this.setState({
                pet: response.data
            })
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    // Select data to delete by Id when click oin button.

    onDelete() {
        this.onDeletingApi()
    }   

    onDeletingApi(){
        api.destroy(currentId)
        .then((response:any) => {
            this.setState({
                pet: response.data
            })
            console.log(response.data);
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
                        <div className="d-grid ms-2">
                            <div className='mt-3'>
                                <Button className="btn btn-danger btn-lg nav-Button rounded-pill border-end-3 shadow mt-3 form-control" 
                                    onClick={this.onDelete}>
                                    <i className='bi bi-trash text-white' aria-hidden></i>
                                    <span className='ms-2 text-white'>Delete</span>
                                </Button> 
                                <Link className="btn nav-link rounded-pill border-primary align-right mt-3 form-control" 
                                    to={"../view-pets"}><i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
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