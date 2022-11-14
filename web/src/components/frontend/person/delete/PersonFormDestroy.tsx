import { Component } from 'react'
import React, { useState, useEffect } from "react";
import api_person_costume from '../../../../stores/api-person-costume'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const api = api_person_costume()
const currentId = 1

export default class PersonFormDestroy extends Component {
   
    state = {
        person: { id: null, first_name: "", last_name: "", birthday: null, age: null, gender: "" },
        currentId: null
    }
    
    // Loading data from api by Id to show in frontend.

    componentDidMount(): void {
        this.onLoading()
    } 

    onLoading(){
        api.show(currentId)
        .then((response:any) => {
            this.setState({
                person: response.data
            })
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    // Select data to delete by Id when click oin button.

    onDelete() {
        this.onDeleting()
    }   

    onDeleting(){
        api.destroy(currentId)
        .then((response:any) => {
            this.setState({
                person: response.data
            })
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    render(){
        const { person } = this.state
        return (
            <div className="col-lg-6 col-xl-12">
                <div className="card mb-5 mb-xl-0 shadow-sm rounded">
                    <div className="card-body p-5">
                        <div className="small text-uppercase fw-bold text-muted">Person</div>
                        <div className="mb-3">
                            <span className="display-4 fw-bold">{person.id}</span>
                            <span className="text-muted">Id</span>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>                                            
                                <span>Nome: <strong>{person.first_name}</strong></span>
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Sobrenome: <strong>{person.last_name}</strong></span>           
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Aniversário: <strong>{person.birthday}</strong></span>  
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Idade: <strong>{person.age}</strong></span>    
                            </ol>
                            <ol className="mb-2">
                                <i className="bi bi-check text-primary"></i>
                                <span>Sexo: <strong>{person.gender}</strong></span>
                            </ol>
                        </ul>
                        <div className="d-grid ms-2">
                            <div className='mt-3'>
                                <Button className="btn btn-danger btn-lg nav-Button rounded-pill border-end-3 shadow mt-3 form-control"
                                    onClick={this.onDelete}><i className='bi bi-trash text-white' aria-hidden></i>
                                    <span className='ms-2 text-white'>Delete</span>
                                </Button> 
                                <Link className="btn nav-link rounded-pill border-primary align-right mt-3 form-control" 
                                    to={"../view-people"}><i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
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