import {makeAutoObservable} from "mobx";
import {RootStore} from '../index'

class AuthorizeStore {
    inputLogin: string = ''
    inputPassword: string = ''
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
    }
    performInputLogin = (login: string) => this.inputLogin = login
    performInputPassword = (password: string) => this.inputPassword = password
}

export default AuthorizeStore