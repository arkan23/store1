import {createContext} from 'react';
// import {enableLogging} from "mobx-logger";

// import store component
import CatalogStore from "./pages/Catalog";
import AuthorizeStore from "./pages/Authorize";
import LandingStore from "./pages/Landing";
import HomeStore from "./pages/Home";

import RouteStore from "./Route";

// Set store logger
export const enableStoreLogging = () => {
    // optional
    const config = {
        predicate: () => true,
        action: true,
        reaction: true,
        transaction: true,
        compute: true
    }

    //enableLogging(config);
}

// Set context store
export class RootStore {
    // page store
    catalogStore: CatalogStore
    authorizeStore: AuthorizeStore
    landingStore: LandingStore
    homeStore: HomeStore
    // route store
    routeStore: RouteStore
    constructor() {
        this.catalogStore = new CatalogStore(this)
        this.authorizeStore = new AuthorizeStore(this)
        this.landingStore = new LandingStore(this)
        this.homeStore = new HomeStore(this)
    }
}


// FIXME add default store value
export const AppContext = createContext<RootStore>(
{catalogStore: new CatalogStore({} as any),
        authorizeStore: new AuthorizeStore({} as any),
        landingStore: new LandingStore({} as any),
        homeStore: new HomeStore({} as any),
        routeStore: new RouteStore({} as any),
})