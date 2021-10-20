import {makeAutoObservable} from "mobx";
import {RootStore} from './index'

class AuthorizeStore {
    counter: number = 0
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
    }
}

export default AuthorizeStore