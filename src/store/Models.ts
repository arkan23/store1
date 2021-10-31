import {Models} from '@types';

export class DefaultValues {
    IAuthorizeStore: Models.IAuthorizeStore = {
        inputLogin: '',
        inputPassword: '',
        authorizationResponse: undefined,
    };
}

export const defaultValues = new DefaultValues();
