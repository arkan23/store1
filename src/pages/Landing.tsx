import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {AppContext} from '@store';

const Landing = observer(() => {
    const appStore = useContext(AppContext);
    return (
        <div className={'LandingWrapper'}>
            <div className={'container-fluid Landing-topBar'}>
                <div className='row'>
                    <div className='col-12'>
                        <nav className="navbar navbar-light bg-light">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <img src="/public/img/logo/logo.png" alt=""
                                         width="30" height="24"/>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
            Одна из трёх колонок
                    </div>
                    <div className='col-4 '>Одна из трёх колонок</div>
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
