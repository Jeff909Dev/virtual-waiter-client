import React from 'react';
import history from '../history';
import AppTransition from './../ui/AppTransition';

import './css/Category.css';

const Category = ({ title, img, path }) => {

    const goTo = path => {
        if (path) { history.push(`/menu/${path}`) }
    }

    return (
        <AppTransition>
            <div className="category_wrapper" onClick={() => goTo(path)} style={{ backgroundImage: `url(${img})`, }} >
                <div className="category_btn badge badge-pill">
                    <span>{title}</span>
                </div>
            </div>
        </AppTransition>
    )
};

export default Category;