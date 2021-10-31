// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Enums {
  export type Phase = 'Never' | 'InProgress' | 'Success' | 'Failure';
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Models {
  // Base interface list
  export interface IResponse<T> {
    data: T,
    cachedDate: Date,
  }
  export interface IError {
    errorCode: string | undefined;
    errorMessage: string | undefined;
  }

  // START call interface list
  export interface IAuthorizationResponse {
    info: IAuthorization | undefined;
    phase: Enums.Phase | undefined;
    error: IError;
  }
  export interface IAuthorizationRequest {
    login: string;
    password: string;
  }
  export interface IProductListResponse {
    info: IProductList | undefined;
    phase: Enums.Phase | undefined;
    error: IError;
  }
  // END call interface list

  export interface IProductList {
    data: IProductItem[] | undefined
  }
  export interface IProductItem {
    id: number,
    name: string,
    price: number | undefined,
    amount: number,
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
