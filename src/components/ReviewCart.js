import React, { Fragment, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Drawer, Button } from 'antd';
import ProductList from './ProductList';
import FadeIn from 'react-fade-in';
import { TICKET_ICON } from '../constants/icons';

import './css/ReviewCart.css';
import history from '../history';

const ReviewCart = () => {

    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const total = useSelector(state => {
        return Object.values(state.cart).reduce((acc, item) => {
            return acc + item.Precio * item.Cantidad;
        }, 0);
    }, shallowEqual);

    const showCart = () => {
        setShow(true);
    }

    const totalFooter = <div className="d-flex align-items-center justify-content-between">
        <span className="review-cart-total-footer">TOTAL: {total}€</span>
        <Button onClick={() => history.push('/checkout')} type="primary">FINALIZAR PEDIDO</Button>
    </div>

    return (
        <Fragment>
            {total !== 0
                ?<FadeIn className="review-btn-wrapper"><button onClick={() => showCart()} className="btn3d">
                    REVISAR PEDIDO {`${total}€`}
                </button></FadeIn>  : null
            }
            <Drawer title={<span>{TICKET_ICON}Resumen del pedido</span>} visible={show}
                placement="bottom" height="50%" onClose={() => setShow(false)}
                footer={totalFooter} bodyStyle={{ padding: 0 }}>

                <ProductList product_list={Object.values(cart)} hidePhoto />

            </Drawer>
        </Fragment>
    )
}

export default ReviewCart;