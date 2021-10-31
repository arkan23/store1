import React from 'react'
import './App.scss'

import PageRouter from './pages/PageRouter'
import {AppContext, RootStore, enableStoreLogging} from '@store'

import * as settings from './common/settings'

settings.devMode === 'development' && enableStoreLogging()
export default function App() {
    return (
        <AppContext.Provider value={new RootStore()}>
            <PageRouter />
        </AppContext.Provider>
    )
}
