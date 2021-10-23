import { makeAutoObservable } from "mobx";
import { RootStore } from "../index";
import { Models } from "../../interface";

class AuthorizeStore {
    inputLogin = "";
    inputPassword = "";
    authorizationResponse: Models.IAuthorizationResponse;
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    performInputLogin = (login: string) => (this.inputLogin = login);
    performInputPassword = (password: string) => (this.inputPassword = password);
}

export default AuthorizeStore;
