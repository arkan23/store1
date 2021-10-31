import {makeAutoObservable} from 'mobx'
import {RootStore} from '@store'

class LandingStore {
    counter = 0
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }
}

export default LandingStore
