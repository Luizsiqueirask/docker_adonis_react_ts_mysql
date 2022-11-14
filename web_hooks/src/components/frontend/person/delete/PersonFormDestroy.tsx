import { Component } from 'react'
import React, { useState, useEffect } from "react";

import api_person_costume from '../../../../stores/api-person-costume'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const api = api_person_costume()

const PersonFormDestroy = () => {
   
    //const [currentId, setCurrentId] = useState({currentId: null})
    const [ person, setPerson ] = useState({ id: null, first_name: "", last_name: "", birthday: null, age: null, gender: "" })
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            onLoading(id)
        }
    }, [id])

    const onLoading = (id: any) => {
        api.show(id)
        .then((response:any) => {
            setPerson(response.data)
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }

    const onDelete = () => {
        if (navigate){
            onDeleting(id)
            return navigate("/person/view-people");
        }
    }

    const onDeleting = (id: any) => {
        api.destroy(id)
        .then((response:any) => {
            setPerson(response.data)
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }
    
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
                                onClick={onDelete}><i className='bi bi-trash text-white' aria-hidden></i>
                            <span className='ms-2 text-white'>Delete</span>
                            </Button> 
                            <Link className="btn nav-link rounded-pill border-primary align-right mt-3 form-control" 
                                to={"../view-people"}>
                            <i className='bi bi-arrow-clockwise text-primary' aria-hidden></i>
                            <span className='ms-2 text-primary'>Voltar</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default PersonFormDestroy