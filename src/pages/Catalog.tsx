import React, {useEffect, useContext} from 'react'
import {observer} from "mobx-react";

import {AppContext} from '../store'

const Catalog = observer(() => {
    const appStore = useContext(AppContext)
    return <div className={'CatalogWrapper'}>
        <div onClick={() => appStore.catalogStore.addCounter()}>WWWWW</div>
        {appStore.catalogStore.counter}
        Catalog
    </div>
})

export default Catalog