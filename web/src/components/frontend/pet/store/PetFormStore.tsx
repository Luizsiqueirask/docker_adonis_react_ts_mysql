import { Component, ChangeEvent } from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api_pet_costume from '../../../../stores/api-pet-costume'
import api_person_costume from '../../../../stores/api-person-costume'

const apiPet = api_pet_costume()
const apiPerson = api_person_costume()

export default class PetFormStore extends Component {

    state = {
        people: [],
        pet: { id: null, name: "", type: "", birthday: null, age: null, genre: "", person_id: null }
    }

    onChangeName(n:  ChangeEvent<HTMLInputElement>){this.setState({name: n.target.value})}
    onChangeType(t:  ChangeEvent<HTMLInputElement>){this.setState({type: t.target.value})}
    onChangeBirthday(b:  ChangeEvent<HTMLInputElement>){this.setState({birthday: b.target.value})}
    onChangeAge(a:  ChangeEvent<HTMLInputElement>){this.setState({age: a.target.value})}
    onChangeGenre(g:  ChangeEvent<HTMLInputElement>){this.setState({genre: g.target.value})}
    onChangePersonId(p:  ChangeEvent<HTMLInputElement>){this.setState({person_id: p.target.value})}

    componentDidMount(): void {
        this.onLoadingApi()
    }   

    onLoadingApi(){
        apiPerson.list()
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

    onSavePet(){
        const petData: any = {
            id: this.state.pet.id, 
            name: this.state.pet.name,
            type: this.state.pet.type,
            birthday: this.state.pet.birthday,
            age: this.state.pet.age, 
            genre: this.state.pet.genre,
            person_id: this.state.pet.person_id
        }
        
        apiPet.store(petData)
        .then((response: any) => {
            this.setState({
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

    render() {
        
        const { pet, people } = this.state

        return (
            <Form className="">
                <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="name" 
                            name="name" 
                            type="text" onChange={this.onChangeName}
                            placeholder="Enter your name..." 
                            data-sb-validations="required" 
                            value={pet.name}
                            />
                        <Form.Label htmlFor="name">Nome</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A name is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="type" 
                            name="type" 
                            type="text" 
                            onChange={this.onChangeType}
                            placeholder="Enter your type..." 
                            data-sb-validations="required"
                            value={pet.type}
                            />
                        <Form.Label htmlFor="type">Tipo</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A type is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="birthday" 
                            name="birthday" 
                            type="date" 
                            onChange={this.onChangeBirthday}
                            placeholder="Enter your birthday..." 
                            data-sb-validations="required" 
                            value={pet.birthday ?? ""}
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
                            onChange={this.onChangeAge}
                            placeholder="Enter your age..." 
                            data-sb-validations="required" 
                            value={pet.age ?? ""}
                            />
                        <Form.Label htmlFor="age">Idade</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="name:required">A age is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3" >
                        <Form.Control
                            className="form-control" 
                            id="gender" 
                            name="gender" 
                            type="text" 
                            onChange={this.onChangeGenre}
                            placeholder="Enter your gender..." 
                            data-sb-validations="required" 
                            value={pet.genre}
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
                        <Button className="btn btn-primary btn-lg rounded-pill shadow-sm" id="submitButton" 
                            onChange={this.onSavePet} 
                            variant="primary">Salvar
                        </Button>
                    </div>
            </Form>
        ) 
    }
}