import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {AppContext} from '../store';

const Landing = observer(() => {
    const appStore = useContext(AppContext);
    return (
        <div className={'LandingWrapper'}>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
            Одна из трёх колонок
                        {appStore.catalogStore.counter}
                    </div>
                    <div className='col-4'>Одна из трёх колонок</div>
                    <div className='col-4'>Одна из трёх колонок</div>
                    <div className='col-4'>Одна из трёх колонок</div>
                    <div className='col-4'>Одна из трёх колонок</div>
                    <div className='col-4'>Одна из трёх колонок</div>
                </div>
            </div>
        </div>
    );
});

export default Landing;
