import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { List, Avatar, Empty, Button, Tooltip, Input } from 'antd';
import { allergens } from '../constants/allergens';
import { ADD_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT, REMOVE_PRODUCT } from '../constants';
import './css/ProductList.css'

const avatar_style = {
    width: 55,
    height: 55
}

const img_st = {
    maxHeight: '100%',
    maxWidth: '100%'
}

const add_btn_icon = {
    verticalAlign: '-0.1rem'
}

const { TextArea } = Input;

const allergensRender = plate => {
    const output = [];
    plate.Alergenos.map((al, index) =>
        output.push(<Tooltip title={allergens[al].label} trigger={['click', 'hover']} key={`al-toltp-key-${index}`}>
            <img style={img_st}
            src={allergens[al].icon}
            alt={allergens[al].label}
            key={`al-key-${index}`} className="mr-2" />
        </Tooltip>))
    return output;
}

const ProductList = ({ product_list, hidePhoto }) => {
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const addProduct = product => {
        if (product) {
            if (cart[product.oid]) {
                dispatch({ type: INCREASE_PRODUCT, payload: product })
            } else {
                dispatch({ type: ADD_PRODUCT, payload: product })
            }
        }
    }
    const restProduct = product => {
        if (product) {
            if (cart[product.oid] && cart[product.oid].Cantidad > 1) {
                dispatch({ type: DECREASE_PRODUCT, payload: product })
            } else {
                dispatch({ type: REMOVE_PRODUCT, payload: product })
            }
        }
    }
 
    return (
        <Fragment>
            {!isEmpty(product_list) ?
                <List itemLayout="horizontal" dataSource={product_list}
                    renderItem={plato => (
                        <List.Item className="px-4" actions={[`${plato.Precio}€`,
                        <span>
                            {cart[plato.oid]?.Cantidad ?
                                <Fragment>
                                    <span className="quantity">X{cart[plato.oid]?.Cantidad}</span>
                                    <Button type="link" onClick={() => restProduct(plato)} shape="circle" icon={<i style={add_btn_icon} className="fad fa-lg fa-minus-circle" />} className="ml-2 cartBtns" />
                                </Fragment> : null}
                            <Button type="link" onClick={() => addProduct(plato)} shape="circle" icon={<i style={add_btn_icon} className="fad fa-lg fa-plus-circle" />} className="ml-2 cartBtns" />
                        </span>]} >

                            <List.Item.Meta avatar={ !hidePhoto ? <Avatar style={avatar_style} size="large" src={plato.Imagen} shape="square" /> : null}
                                title={plato.Descripcion}
                                description={<div style={{ display: 'flex', width: 14, height: 'auto' }}>
                                    {allergensRender(plato)}
                                </div>} className="text-left" />
              
                        </List.Item>
                    )} />
                : <Empty description="" />
            }
        </Fragment>
    )
};

export default ProductList;