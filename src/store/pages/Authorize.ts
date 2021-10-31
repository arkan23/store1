import {makeAutoObservable} from 'mobx';
import {RootStore} from '@store';
import {Models} from '@types';

import * as util from '../../common/util'

class AuthorizeStore {
    inputLogin = '';
    inputPassword = '';
    authorization: Models.IAuthorizationResponse;
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    callPostAuthorize = () => {
        // START additional fetch logic

        // END additional fetch logic
        this.authorization = {info: undefined, phase: 'InProgress', error: undefined}
        util.call<Models.IAuthorizationResponse, Models.IAuthorizationRequest>(
            util.authorizationUrl,
            (response: Models.IResponse<Models.IAuthorizationResponse>) => {
                this.authorization = {info: response.data.info, phase: 'Success', error: undefined}
                // START additional fetch logic

                // END additional fetch logic
            },
            (error) => {
                this.authorization = {info: undefined, phase: 'Failure', error: error}
                // START additional fetch logic

                // END additional fetch logic
            },
            {} as any,
            'POST',
            null,
            {'Content-type': 'application/json; charset=UTF-8'},
            {
                login: this.inputLogin,
                password: this.inputPassword,
            },
        )
        // START additional fetch logic

        // END additional fetch logic
    }
    performInputLogin = (login: string) => (this.inputLogin = login);
    performInputPassword = (password: string) => (this.inputPassword = password);
}

export default AuthorizeStore;
