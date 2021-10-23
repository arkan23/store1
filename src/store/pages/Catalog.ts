import { makeAutoObservable } from "mobx";
import { RootStore } from "../index";

class CatalogStore {
    counter = 0;
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    addCounter = () => this.counter++;
}

export default CatalogStore;
