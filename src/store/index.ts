import {createContext} from 'react';
// import {enableLogging} from "mobx-logger";

// import store component
import CatalogStore from "./../store/Catalog";
import AuthorizeStore from "./../store/Authorize";
import LandingStore from "./../store/Landing";
import HomeStore from "./../store/Home";

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
    catalogStore: CatalogStore
    authorizeStore: AuthorizeStore
    landingStore: LandingStore
    homeStore: HomeStore
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
        homeStore: new HomeStore({} as any)})