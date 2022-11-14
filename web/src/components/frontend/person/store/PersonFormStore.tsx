import { Component, ChangeEvent } from "react"
import { Container, Form, Button } from "react-bootstrap";
import api_person_costume from '../../../../stores/api-person-costume'
import { redirect } from "react-router-dom";

const api = api_person_costume()

export default class PersonFormStore extends Component {
    constructor(props: any){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeBirthday = this.onChangeBirthday.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
    }

    state = { first_name: "", last_name: "", birthday: null, age: null, gender: "" }

    onChangeFirstName(first_name: ChangeEvent<HTMLInputElement>){this.setState({first_name: first_name.target.value})}
    onChangeLastName(last_name: ChangeEvent<HTMLInputElement>){this.setState({last_name: last_name.target.value})}
    onChangeBirthday(birthday: ChangeEvent<HTMLInputElement>){this.setState({birthday: birthday.target.value})}
    onChangeAge(age: ChangeEvent<HTMLInputElement>){this.setState({age: age.target.value})}
    onChangeGender(gender: ChangeEvent<HTMLInputElement>){this.setState({gender: gender.target.value})}

    onSavePerson = () => {
        const personData = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthday: this.state.birthday,
            age: this.state.birthday, 
            gender: this.state.gender
        }

        api.store(personData)
        .then((response: any) => {
            this.setState({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                birthday: response.data.birthday,
                age: response.data.birthday, 
                gender: response.data.gender
            })
            console.log(response.data)
        })
        .catch((error: Error) => {
            console.error(error);
        })
        return redirect("/");
    }

    newPerson = () => {
        this.setState({ first_name: "", last_name: "", birthday: null, age: null, gender: "" })
    }
    
    render(){

        return (
            <Container>
                <Form method="POST" autoComplete="off">
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                                className="form-control"
                                id="first_name" 
                                name="first_name" 
                                type="text"
                                //value={person.first_name}
                                onChange={this.onChangeFirstName}
                                placeholder="Enter your first_name..." 
                                data-sb-validations="required"
                                />
                            <Form.Label htmlFor="first_name">Nome</Form.Label>                        
                            <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A first_name is required.</Form.Text>
                        </Form.Group>
                        <Form.Group className="form-floating mb-3">
                            <Form.Control
                                className="form-control" 
                                id="last_name" 
                                name="last_name" 
                                type="text"
                                //value={person.last_name}
                                onChange={this.onChangeLastName}
                                placeholder="Enter your last_name..." 
                                data-sb-validations="required"
                                />
                            <Form.Label htmlFor="last_name">Sobrenome</Form.Label>                        
                            <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A last_name is required.</Form.Text>
                        </Form.Group>
                        <Form.Group className="form-floating mb-3">
                            <Form.Control
                                className="form-control" 
                                id="birthday" 
                                name="birthday" 
                                type="date" 
                                //value={person.birthday ?? ""}
                                onChange={this.onChangeBirthday}
                                placeholder="Enter your birthday..." 
                                data-sb-validations="required"                            
                                />
                            <Form.Label htmlFor="birthday">Aniversário</Form.Label>                        
                            <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A birthday is required.</Form.Text>
                        </Form.Group>
                        <Form.Group className="form-floating mb-3">
                            <Form.Control
                                className="form-control" 
                                id="age" 
                                name="age" 
                                type="text" 
                                //value={person.age ?? ""}
                                onChange={this.onChangeAge}
                                placeholder="Enter your age..." 
                                data-sb-validations="required"                             
                                />
                            <Form.Label htmlFor="age">Idade</Form.Label>                        
                            <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A age is required.</Form.Text>
                        </Form.Group>
                        <Form.Group className="form-floating mb-3">
                            <Form.Control
                                className="form-control" 
                                id="gender" 
                                name="gender" 
                                type="text"
                                //value={person.gender}
                                onChange={this.onChangeGender}
                                placeholder="Enter your gender..." 
                                data-sb-validations="required" 
                                />
                            <Form.Label htmlFor="gender">Gênero</Form.Label>                        
                            <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A gender is required.</Form.Text>
                        </Form.Group>
                    <div className="d-grid">
                        <Button className="btn btn-primary btn-lg rounded-pill shadow-sm"
                            id="submitButton" 
                            onClick={this.onSavePerson}
                            variant="primary">Salvar
                        </Button>
                    </div>
                </Form>
            </Container>
        )   
    }
}