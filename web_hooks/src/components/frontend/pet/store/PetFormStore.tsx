import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import api_pet_costume from '../../../../stores/api-pet-costume'
import api_person_costume from '../../../../stores/api-person-costume'
import { useNavigate } from "react-router-dom";

const apiPet = api_pet_costume()
const apiPerson = api_person_costume()

const PetFormStore = () => {
    
    const [ pet, setPet ] = useState({ name: "", type: "", birthday: null, age: null, genre: "", person_id: null })
    const [ people, setPeople ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        onLoading()
    }, [])  

    const onLoading = () => {
        apiPerson.list()
        .then((response:any) => {
            setPeople(response.data)
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPet({...pet, [name]: value})
    }

    const onSavePet = () => {
        const petData: any = {
            firstname: pet.name,
            lastname: pet.type,
            birthday: pet.birthday,
            age: pet.age, 
            genre: pet.genre,
            person_id: pet.person_id
        }

        apiPet.store(petData).then((response: any) => {
            setPet({
                name: response.data.name,
                type: response.data.type,
                birthday: response.data.birthday,
                age: response.data.age, 
                genre: response.data.genre,
                person_id: response.data.person_id
            })
            console.log(response.data)
        })
        .catch((error: Error) => {
            console.log(error);
        })
        return navigate("/pet/view-pets")
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
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="genre" 
                        type="text" 
                        value={pet.genre}
                        onChange={handleInputChange}
                        placeholder="Enter your genre..." 
                        data-sb-validations="required"
                        name="genre" 
                        />
                    <Form.Label htmlFor="genre">Gênero</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A genre is required.</Form.Text>
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
                    <Button className="btn btn-primary btn-lg rounded-pill shadow-sm" id="submitButton" 
                        onClick={onSavePet} 
                        variant="primary">Salvar
                    </Button>
                </div>        
        </Form>
    )        
}

export default PetFormStore
