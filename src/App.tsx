import React from 'react';
import './App.scss'

import PageRouter from "./pages/PageRouter";
import {AppContext, RootStore, enableStoreLogging} from "./store";

enableStoreLogging()

export default function App() {
    return <AppContext.Provider value={new RootStore}>
        <PageRouter/>
    </AppContext.Provider>
}


