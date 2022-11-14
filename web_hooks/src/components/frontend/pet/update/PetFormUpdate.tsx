import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api_pet_costume from '../../../../stores/api-pet-costume'
import api_person_costume from '../../../../stores/api-person-costume'
import { Link, useParams } from "react-router-dom";

const apiPet = api_pet_costume()
const apiPerson = api_person_costume()

const PetFormUpdate = () => {
    
    const [ pet, setPet ] = useState({id: null, name: "", type: "", birthday: null, age: null, genre: "", person_id: null})
    const [ people, setPeople ] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        onLoadingPeople()
    }, []) 

    useEffect(() => {
        if(id){        
            onLoadingPet(id)     
        }
    }, [id]) 
    
    const onLoadingPeople = () => {
        apiPerson.list()
        .then((response:any) => {
            setPeople(response.data)
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    const onLoadingPet = (id: any) => {
        apiPet.show(id)
        .then((response:any) => {
            const updateDate = {
                ...response.data,
                birthday: response.data.birthday.slice(0, 10)
            }
            setPet(updateDate)
            console.log(updateDate)
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setPet({...pet, [name]: value})
    }

    const onSavePet = () => {

        const petData: any = {
            id: pet.id, 
            firstname: pet.name,
            lastname: pet.type,
            birthday: pet.birthday,
            age: pet.birthday, 
            gender: pet.genre,
            person_id: pet.person_id
        }

        apiPet.update(id, petData)
        .then((response: any) => {
            setPet({
                id: response.data.id, 
                name: response.data.name,
                type: response.data.type,
                birthday: response.data.birthday,
                age: response.data.birthday, 
                genre: response.data.genre,
                person_id: response.data.person_id
            })
            console.log(response.data)
        })
        .catch((error: Error) => {
            console.log(error);
        })
    }    

    return (
        <Form method="POST" autoComplete="off">
            <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="name" 
                        type="text"
                        value={pet.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name..." 
                        data-sb-validations="required"                        
                        name="name" 
                        />
                    <Form.Label htmlFor="name">Nome</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A name is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="type" 
                        type="text" 
                        value={pet.type}
                        onChange={handleInputChange}
                        placeholder="Enter your type..." 
                        data-sb-validations="required"                         
                        name="type" 
                        />
                    <Form.Label htmlFor="type">Tipo</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A type is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="birthday" 
                        type="date"
                        value={pet.birthday ?? ""}
                        onChange={handleInputChange}
                        placeholder="Enter your birthday..." 
                        data-sb-validations="required"
                        name="birthday" 
                        />
                    <Form.Label htmlFor="birthday">Aniversário</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A birthday is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="age" 
                        type="text" 
                        value={pet.age ?? ""}
                        onChange={handleInputChange}
                        placeholder="Enter your age..." 
                        data-sb-validations="required"                         
                        name="age" 
                        />
                    <Form.Label htmlFor="age">Idade</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A age is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3" >
                    <Form.Control
                        className="form-control" 
                        id="gender" 
                        type="text" 
                        value={pet.genre}
                        onChange={handleInputChange}
                        placeholder="Enter your gender..." 
                        data-sb-validations="required"
                        name="gender" 
                        />
                    <Form.Label htmlFor="gender">Gênero</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A gender is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Label className="" htmlFor="person_id">Dono</Form.Label>                        
                    <Form.Select id="person_id" name="person_id" className="form-control" aria-label="Default select example">
                        <option className="text-center mb-5">Escolha o dono</option>
                        {
                            people.map((person: any, index: number) => (
                                <option className="pt-2 text-center mt-3" key={person.id} value={person.id}>{index+1} - {person.first_name} {person.last_name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <div className="d-grid">
                    <Button className="btn bg-warning bg-gradient btn-lg text-white mt-4 rounded-pill" 
                        onChange={onSavePet} variant="warning">
                        Editar
                    </Button>
                </div>
                <div className='d-grid'>
                    <Link className="btn nav-link rounded-pill border-primary align-right mt-3 form-control" 
                        to={"../view-pets"}><i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
                        <span className='ms-2 text-primary'>Voltar</span>
                    </Link>
                </div>  
        </Form>
    )        
}

export default PetFormUpdate
