import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import ProductList from './../components/ProductList';

const Checkout = () => {

    const cart = useSelector(state => state.cart)

    return (
        <Grid>
            <ProductList product_list={Object.values(cart)} />
        </Grid>
    )
};

export default Checkout;
