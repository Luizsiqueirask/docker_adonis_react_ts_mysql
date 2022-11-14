import { Component } from 'react'
import { Link } from 'react-router-dom'
import api_person_costume from '../../../../stores/api-person-costume'

const api = api_person_costume()

export default class PersonFormList extends Component {
    
    state = {
        people: []
    }
    
    componentDidMount(): void {
        this.onLoadingApi()
    }   

    onLoadingApi(){
        api.list()
        .then((response:any) => {
            this.setState({
                people: response.data
            })
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }
    
    render(){
        const { people } = this.state

        return (
            <div>
                <div className='col-4 mb-5'>
                    <Link className="btn btn-success nav-link rounded-pill border-end-3 shadow-sm" to={"../add-person"}>
                        <i className='bi bi-person text-white' aria-hidden></i>
                        <span className='ms-2 text-white'>Novo</span>
                    </Link>
                </div>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sobrenome</th>
                            <th scope="col">Aniversário</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Operação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        people && people.map((person:any, index: number) => (
                            <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{person.id}</td>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.birthday}</td>
                                <td>{person.age}</td>
                                <td>{person.gender}</td>
                                <td scope='row'>
                                    <div className='row'>
                                        <Link className="nav-link col-4" to={`/person/show-person/${person.id}`}><i className='bi bi-eye text-primary' aria-hidden></i></Link>
                                        <Link className="nav-link col-4" to={`/person/update-person/${person.id}`}><i className='bi bi-pencil text-warning' aria-hidden></i></Link>
                                        <Link className="nav-link col-4" to={`/person/destroy-person/${person.id}`}><i className='bi bi-trash text-danger' aria-hidden></i></Link>
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
}