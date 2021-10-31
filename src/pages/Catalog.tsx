import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {AppContext} from '@store';

const Catalog = observer(() => {
    const appStore = useContext(AppContext);
    return (
        <div className={'CatalogWrapper'}>
            <div >WWWWW</div>
      Catalog
        </div>
    );
});

export default Catalog;
