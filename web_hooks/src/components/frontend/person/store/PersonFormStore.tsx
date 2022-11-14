import React, { ChangeEvent, useState } from "react"
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import IPerson from "../../../../model/Person";
import api_person_costume from '../../../../stores/api-person-costume'

const api = api_person_costume()

const PersonFormStore = () => {

    const [ person, setPerson ] = useState({ first_name: "", last_name: "", birthday: "", age: "", gender: "" })
    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPerson({...person, [name]: value})
    }

    const onSavePerson = () => {
        const personData:any = {
            first_name: person.first_name,
            last_name: person.last_name,
            birthday: person.birthday,
            age: person.age, 
            gender: person.gender
        }

        api.store(personData).then((response: any) => {
            setPerson({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                birthday: response.data.birthday,
                age: response.data.age,
                gender: response.data.gender          
            })
            console.log(response.data)
        })
        .catch((error: Error) => {
            console.log(error);
        })
        return navigate("/person/view-people");
    }

    /*const newTutorial = () => {
        setPerson(IPerson);
        return navigate("/person/view-people");
    }*/

    return (
        <Container>
            <Form method="POST" autoComplete="off">
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                            className="form-control" 
                            id="first_name" 
                            type="text"
                            value={person.first_name}
                            onChange={handleInputChange}
                            placeholder="Enter your first_name..." 
                            data-sb-validations="required"
                            name="first_name" />
                        <Form.Label htmlFor="first_name">Nome</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="first_name:required">A first name is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="last_name" 
                            type="text"
                            value={person.last_name}
                            onChange={handleInputChange}
                            placeholder="Enter your last_name..." 
                            data-sb-validations="required"       
                            name="last_name" 
                            />
                        <Form.Label htmlFor="last_name">Sobrenome</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="last_name:required">A last name is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="birthday" 
                            type="date"
                            value={person.birthday ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter your birthday..." 
                            data-sb-validations="required"                        
                            name="birthday" 
                            />
                        <Form.Label htmlFor="birthday">Aniversário</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="birthday:required">A birthday is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="age" 
                            value={person.age ?? ""}
                            type="text" 
                            onChange={handleInputChange}
                            placeholder="Enter your age..." 
                            data-sb-validations="required" 
                            name="age" 
                            />
                        <Form.Label htmlFor="age">Idade</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="age:required">A age is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="gender" 
                            type="text" 
                            value={person.gender ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter your gender..." 
                            data-sb-validations="required"                         
                            name="gender" 
                            />
                        <Form.Label htmlFor="gender">Gênero</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="gender:required">A gender is required.</Form.Text>
                    </Form.Group>
                <div className="d-grid">
                    <Button className="btn btn-primary btn-lg rounded-pill shadow-sm"
                        id="submitButton" 
                        onClick={onSavePerson}
                        variant="primary">Salvar
                    </Button>
                </div>
            </Form>  
        </Container>
    )
}

export default PersonFormStore 