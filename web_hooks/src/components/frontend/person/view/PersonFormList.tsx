import { Component } from 'react'
import React, { useState, useEffect } from "react";

import api_person_costume from '../../../../stores/api-person-costume'
import { Link } from 'react-router-dom';

const api = api_person_costume()

const PersonFormList = () => {
   
    const [ people, setPeople ] = useState([])

    useEffect(() => {
        onLoadingApi()
    }, [])

    const onLoadingApi = () => {
        api.list()
        .then((response:any) => {
            setPeople(response.data)
            console.log(response.data);
        })
        .catch((e:any) => {
            console.log(e)
        })
    }
    
    return (
        <div>
            <div className='col-4 mb-5'>
                <Link className="btn btn-success nav-link rounded-pill border-end-3 shadow-sm" 
                    to={'../add-person'}>
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
                    {people && people.map((person:any, index: number) => (
                        <tr key={index}>
                            <th scope="row" >{index + 1}</th>
                            <td>{person.id}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.birthday}</td>
                            <td>{person.age}</td>
                            <td>{person.gender}</td>
                            <td scope='row'>
                                <div className='row'>
                                    <Link className="nav-link col-4" to={`../show-person/${person.id}`}><i className='bi bi-eye text-primary' aria-hidden></i></Link>
                                    <Link className="nav-link col-4" to={`../update-person/${person.id}`}><i className='bi bi-pencil text-warning' aria-hidden></i></Link>
                                    <Link className="nav-link col-4" to={`../destroy-person/${person.id}`}><i className='bi bi-trash text-danger' aria-hidden></i></Link>
                                </div>
                            </td>
                        </tr>
                    ))}         
                </tbody>
            </table>
        </div>
    )
}
  
export default PersonFormList