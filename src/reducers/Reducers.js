import { handleActions } from 'redux-actions';
import {
    SET_ESTABLISHMENT_DATA, SET_MENU,
    ADD_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT, REMOVE_PRODUCT, RESET
} from '../constants';

export const stablishment = handleActions({
    [SET_ESTABLISHMENT_DATA]: (state, action) => action.payload
}, {});

export const menu = handleActions({
    [SET_MENU]: (state, action) => action.payload
}, {});


export const cart = handleActions({
    [ADD_PRODUCT]: (state, action) => ({
        ...state,
        [action.payload.oid]: { ...action.payload, Cantidad: 1, Observaciones: '' }
    }),
    [INCREASE_PRODUCT]: (state, action) => ({
        ...state,
        [action.payload.oid]: {
            ...state[action.payload.oid],
            Cantidad: state[action.payload.oid].Cantidad + 1
        }
    }
    ),
    [DECREASE_PRODUCT]: (state, action) => ({
        ...state,
        [action.payload.oid]: {
            ...state[action.payload.oid],
            Cantidad: state[action.payload.oid].Cantidad - 1
        }
    }
    ),
    [REMOVE_PRODUCT]: (state, action) => {
        const updatedCart = { ...state };
        delete updatedCart[action.payload.oid];
        return updatedCart;
    },
    [RESET]: (state, action) => { }
}, {});