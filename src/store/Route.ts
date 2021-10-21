import {makeAutoObservable} from "mobx";

class RouteStore {
    currentRoute: string = ''
    routeHistoryList: string[] = []
    constructor() {
        makeAutoObservable(this)
    }

    performInputCurrentRoute = (route: string) => {
        this.currentRoute = route
        this.routeHistoryList.push(route)
    }

    performInputBack = () => {
        if (this.routeHistoryList.length) {
            this.routeHistoryList.pop()
            this.currentRoute = this.routeHistoryList[this.routeHistoryList.length - 1]
        }
    }
}

export default RouteStore