import {makeAutoObservable} from 'mobx'

import {RootStore} from '@store'
import * as util from '../../common/util'
import {Models} from '@types'

class CatalogStore {
    productList: Models.IProductListResponse
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }
    callGetProductList = () => {
        // START additional fetch logic

        // END additional fetch logic
        this.productList = {info: undefined, phase: 'InProgress', error: undefined}
        util.call<Models.IProductListResponse, void>(
            util.productListUrl,
            (response) => {
                this.productList = {info: response.data.info, phase: 'Success', error: undefined}
                // START additional fetch logic

                // END additional fetch logic
            },
            (error) => {
                this.productList = {info: undefined, phase: 'Failure', error: error}
                // START additional fetch logic

                // END additional fetch logic
            },
            {} as any,
            'GET',
            null,
            {'Content-type': 'application/json; charset=UTF-8'},
            {} as any,
        )
        // START additional fetch logic

        // END additional fetch logic
    }
}

export default CatalogStore
