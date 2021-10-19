import {makeAutoObservable} from "mobx";

class Catalog {
    counter: number = 0
    constructor() {
        makeAutoObservable(this)
    }

    addCounter = () => this.counter++
}

export default new Catalog()