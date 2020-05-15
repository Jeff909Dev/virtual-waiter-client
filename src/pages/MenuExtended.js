import React, { useState, Fragment } from 'react';
import { find } from 'lodash';
import { categories } from './../constants/categories';
import ProductList from '../components/ProductList';
import FadeIn from 'react-fade-in';

import './css/MenuExtended.css';

const MenuExtended = ({ cat, products, lang }) => {

    const [category] = useState(find(categories, { id: Number(cat) }));

    return (
        <Fragment>
            <section className="menu-cat-header" style={{ backgroundImage: `url(${category?.img})` }}>
                <div className="badge badge-pill cat-title-style">
                    {lang(category?.Descripcion)}
                </div>
            </section>
            <FadeIn>
                <section style={{ marginTop: '6rem' }}>
                    <ProductList product_list={products} />
                </section>
            </FadeIn>
        </Fragment>
    )
};

export default MenuExtended;