import http from './http-common'
import Person from '../model/Person'

const service:any = {}

/**
 * PERSON API
 * @argument person:any
 * @returns person:any
 */

export default function PersonAPI(){
    service.list = () => {
        return http.get<Array<Person>>('/person');
    }
    service.show = (id: number) => {
        return http.get<Person>(`/person/${id}`);
    }
    service.store = async (person: Person) => {
        return await http.post('/person/', person);
    }
    service.update = (id: number, person: Person) => {
        return http.put(`/person/${id}`, person);
    }
    service.destroy = (id: number) => {
        return http.delete(`/person/${id}`);
    }
    return service
}