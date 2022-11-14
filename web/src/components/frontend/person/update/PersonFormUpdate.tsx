import { Component, ChangeEvent } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import api_person_costume from '../../../../stores/api-person-costume'

const api = api_person_costume()
const currentId = 1
export default class PersonFormUpdate  extends Component {
    constructor(props: any){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeBirthday = this.onChangeBirthday.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
    }

    state = { 
        person: {id: null, first_name: "", last_name: "", birthday: null, age: null, gender: "" },
        currentId: null
    }

    onChangeFirstName(f: ChangeEvent<HTMLInputElement>){this.setState({first_name: f.target.value})}
    onChangeLastName(l: ChangeEvent<HTMLInputElement>){this.setState({last_name: l.target.value})}
    onChangeBirthday(b: ChangeEvent<HTMLInputElement>){this.setState({birthday: b.target.value})}
    onChangeAge(a: ChangeEvent<HTMLInputElement>){this.setState({age: a.target.value})}
    onChangeGender(g: ChangeEvent<HTMLInputElement>){this.setState({gender: g.target.value})}

    componentDidMount(): void {
        this.onLoading()
    }   

    onLoading(){
        api.show(currentId)
        .then((response:any) => {
            const updateData = {
                ...response.data,
                birthday: new Date(response.date.birthday.slice(0, 10))
            }
            console.log(updateData)
            this.setState({
                person: response.data
            })
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    onSavePerson(){
        const personData: any = {
            id: this.state.person.id, 
            first_name: this.state.person.first_name,
            last_name: this.state.person.last_name,
            birthday: this.state.person.birthday,
            age: this.state.person.birthday, 
            gender: this.state.person.gender
        }
        
        api.update(currentId, personData)
        .then((response: any) => {
            this.setState({
                id: response.data.id, 
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                birthday: response.data.birthday,
                age: response.data.birthday, 
                gender: response.data.gender
            })
            alert(response.data)
            console.log(response.data)
        })
        .catch((error: Error) => {
            console.log(error);
        })
    }
    
    render(){
        const { person } = this.state
       
        return (
            <Form className="">
                <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="first_name" 
                            name="first_name" 
                            type="text" 
                            onChange={this.onChangeFirstName}
                            placeholder="Enter your first_name..." 
                            data-sb-validations="required"
                            value={person.first_name}
                            />
                        <Form.Label htmlFor="first_name">Nome</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="first_name:required">A first_name is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="last_name" 
                            name="last_name" 
                            type="text" onChange={this.onChangeLastName}
                            placeholder="Enter your last_name..." 
                            data-sb-validations="required"
                            value={person.last_name}
                            />
                        <Form.Label htmlFor="last_name">Sobrenome</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="last_name:required">A last_name is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="birthday" 
                            name="birthday" 
                            type="date" onChange={this.onChangeBirthday}
                            placeholder="Enter your birthday..." 
                            data-sb-validations="required"  
                            value={person.birthday ?? ""}                          
                            />
                        <Form.Label htmlFor="birthday">Aniversário</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="birthday:required">A birthday is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3">
                        <Form.Control
                            className="form-control" 
                            id="age" 
                            name="age" 
                            type="text" onChange={this.onChangeAge}
                            placeholder="Enter your age..." 
                            data-sb-validations="required"  
                            value={person.age ?? ""}                           
                            />
                        <Form.Label htmlFor="age">Idade</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="age:required">A age is required.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-floating mb-3" >
                        <Form.Control
                            className="form-control" 
                            id="gender" 
                            name="gender" 
                            type="text" onChange={this.onChangeGender}
                            placeholder="Enter your gender..." 
                            data-sb-validations="required"
                            value={person.gender}
                            />
                        <Form.Label htmlFor="gender">Gênero</Form.Label>                        
                        <Form.Text className="invalid-feedback" data-sb-feedback="gender:required">A gender is required.</Form.Text>
                    </Form.Group>
                    <div className="d-grid">
                        <Button className="btn bg-warning bg-gradient btn-lg text-white mt-4 rounded-pill" 
                            onChange={this.onSavePerson} variant="warning">
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
}