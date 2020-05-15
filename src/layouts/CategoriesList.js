import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { categories } from '../constants/categories';
import Category from '../components/Category';
import { useSelector } from 'react-redux';

const CategoriesList = ({ lang }) => {

    const menu_categories = useSelector(state => state.menu.menu_cats);

    return (
        <section>
            <Row className="px-0 mx-0">
                <Col xs={12} xl={6} xlOffset={3} className="p-0 mx-0" style={{ overflow: 'hidden', borderRadius: 10 }}>
                    {menu_categories?.map((cat, i) => {
                        return <Category title={lang( categories[cat].Descripcion)} img={categories[cat].img} 
                                path={categories[cat].id} key={`cat-${i}`} />
                    })}
                </Col>
            </Row>
        </section>
    )
};

export default CategoriesList;

