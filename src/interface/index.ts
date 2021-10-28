// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Enums {
  export type Phase = 'Never' | 'InProgress' | 'Success' | 'Failure';
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Models {
  export interface IResponse<T> {
    data: T,
    cachedDate: Date,
  }
  export interface IError {
    errorCode: string | undefined;
    errorMessage: string | undefined;
  }
  export interface IAuthorizationResponse {
    info: IAuthorization | undefined;
    phase: Enums.Phase | undefined;
    error: IError;
  }
  export interface IAuthorizationRequest {
    login: string;
    password: string;
  }
  export interface IAuthorization {
    fio: string | undefined
    login: string | undefined;
    email: string | undefined;
  }

  export interface IAuthorizeStore {
    inputLogin: string;
    inputPassword: string;
    authorizationResponse: IAuthorizationResponse | undefined;
  }
}
