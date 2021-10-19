import React, {useEffect} from 'react'
import {observer} from "mobx-react";
import catalogState from './../store/Catalog'

const Catalog = observer(() => {

    return <div className={'CatalogWrapper'}>
        <div onClick={() => catalogState.addCounter()}>WWWWW</div>
        {catalogState.counter}
        Catalog
    </div>
})

export default Catalog