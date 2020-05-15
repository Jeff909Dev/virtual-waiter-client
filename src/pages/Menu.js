import React, { Fragment } from 'react';
import CategoriesList from '../layouts/CategoriesList';

const Menu = ({ lang }) => {
    return (
        <Fragment>
            <h6 style={{fontSize: 'x-large', marginBottom: '1rem'}}>
                {lang('MENU')}
            </h6>
            <CategoriesList lang={lang} />
        </Fragment>
    )
}

export default Menu;