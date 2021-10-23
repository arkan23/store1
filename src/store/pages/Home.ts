import {makeAutoObservable} from 'mobx';
import {RootStore} from '../index';

class HomeStore {
    counter = 0;
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}

export default HomeStore;
