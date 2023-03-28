import http from './http-common'
import Auth from '../model/Auth'

const service:any = {}

/**
 * User API
 * @argument User:any
 * @returns User:any
 */

export default function AuthAPI(){
   
    service.register = async (auth: Auth) => {
        return await http.post('/regiter', auth);
    }

    service.login = async (auth: Auth) => {
        return await http.post('/login', auth);
    }

    service.logout = async (auth: Auth) => {
        return await http.post('/logout', auth);
    }
    
    return service
}