import {makeAutoObservable} from "mobx";
import {RootStore} from '../index'
import {Models, Enums} from '../../interface'

class AuthorizeStore {
    inputLogin: string = ''
    inputPassword: string = ''
    authorizationResponse: Models.IAuthorizationResponse
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
    }
    performInputLogin = (login: string) => this.inputLogin = login
    performInputPassword = (password: string) => this.inputPassword = password
}

export default AuthorizeStore