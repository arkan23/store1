import {makeAutoObservable} from "mobx";
import {RootStore} from '../index'

class CatalogStore {
    counter: number = 0
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
    }

    addCounter = () => this.counter++
}

export default CatalogStore