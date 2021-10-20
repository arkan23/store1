import React, {useContext} from 'react'
import {observer} from "mobx-react";

import {AppContext} from "../store";

const Landing = observer(() => {
    const appStore = useContext(AppContext)
    console.log(appStore)
    return <div className={'LandingWrapper'}>
        Langing
    </div>
})

export default Landing