import { ChangeEvent, Component, useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link, useParams, useNavigate } from "react-router-dom"
import api_person_costume from '../../../../stores/api-person-costume'

const api = api_person_costume()

const PersonFormUpdate = () => {

    const navigate = useNavigate();
    const [ person, setPerson ] = useState({ id: null, first_name: "", last_name: "", birthday: null, age: null, gender: "" })
    const { id } = useParams()

    const handleInnputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPerson({...person, [name]: value})
    }

    useEffect(() => {
        if(id){
            onLoading(id)
        }
    }, [id])

    const onLoading = (id: any) => {
        api.show(id)
        .then((response:any) => {
            const updateDate = {
                ...response.data,
                birthday: response.data.birthday
            }
            setPerson(updateDate)
            console.log(updateDate)
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    const OnSavePerson = () => {
        const personData: any = {
            id: person.id, 
            first_name: person.first_name,
            last_name: person.last_name,
            birthday: person.birthday,
            age: person.age, 
            gender: person.gender
        }

        console.log(personData)

        api.update(id, personData)
        .then((response: any) => {

            console.log(personData)

            setPerson({
                id: response.data.id, 
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
        return navigate("/person/view-people")
    }

    return (
        <Form method="POST" autoComplete="off">
            <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="first_name" 
                        type="text"
                        value={person.first_name}
                        onChange={handleInnputChange}
                        placeholder="Enter your first_name..." 
                        data-sb-validations="required"
                        name="first_name" />
                    <Form.Label htmlFor="first_name">Nome</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A first_name is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="last_name" 
                        type="text"
                        value={person.last_name}
                        onChange={handleInnputChange}
                        placeholder="Enter your last_name..." 
                        data-sb-validations="required"       
                        name="last_name" 
                        />
                    <Form.Label htmlFor="last_name">Sobrenome</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A last_name is required.</Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control
                        className="form-control" 
                        id="birthday" 
                        type="date"
                        value={person.birthday ?? ""}
                        onChange={handleInnputChange}
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
                        value={person.age ?? ""}
                        type="text" 
                        onChange={handleInnputChange}
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
                        value={person.gender ?? ""}
                        onChange={handleInnputChange}
                        placeholder="Enter your gender..." 
                        data-sb-validations="required"                         
                        name="gender" 
                        />
                    <Form.Label htmlFor="gender">Gênero</Form.Label>                        
                    <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A gender is required.</Form.Text>
                </Form.Group>
                <div className="d-grid">
                    <Button className="btn bg-warning bg-gradient btn-lg text-white mt-4 rounded-pill" 
                        onClick={OnSavePerson} 
                        variant="warning">
                        Editar
                    </Button>
                </div>
                <div className='d-grid'>
                    <Link className="btn nav-link rounded-pill border-primary align-right mt-3 form-control" 
                        to={"../view-people"}><i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
                        <span className='ms-2 text-primary'>Voltar</span>
                    </Link>
                </div>
        </Form>
    )
}

export default PersonFormUpdate 