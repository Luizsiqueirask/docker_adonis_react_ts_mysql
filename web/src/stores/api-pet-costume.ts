import http from './http-common'
import Pet from '../model/Pet'

const service:any = {}

/**
 * PET API
 * @argument pet:any
 * @returns pet:any
 */

export default function PetAPI(){
    service.list = async () => {
        return await http.get<Array<Pet>>('/pet');
    }
    service.show = async (id: number) => {
        return await http.get<Pet>(`/pet/${id}`);
    }
    service.store = async (pet: Pet) => {
        return await http.post('/pet', pet);
    }
    service.update = async (id: number, pet: Pet) => {
        return await http.put(`/pet/${id}`, pet);
    }
    service.destroy = async (id: number) => {
        return await http.delete(`/pet/${id}`);
    }
    return service
}