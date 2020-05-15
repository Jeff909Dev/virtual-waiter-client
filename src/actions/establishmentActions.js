import Axios from 'axios';
import { uniqBy } from 'lodash';
import { API } from '../constants/api';
import { SET_ESTABLISHMENT_DATA, SET_MENU } from '../constants';


export const fetchStablishmentData = establishmentID => {
    return async dispatch => {
        const response = await Axios.get(`${API}/establecimiento`)
            .then(response => {
                dispatch({ type: SET_ESTABLISHMENT_DATA, payload: response.data });
                return response.status;
            }
        ).catch(error => console.log(error));
        return response;
    }
}

export const fetchMenuData = establishmentID => {
    return async dispatch => {
        const response = await Axios.get(`${API}/menu`)
            .then(response => {
                if(response.data){
                    const menu_cats =  uniqBy(response.data, 'Tipo_Plato')?.map( p => p.Tipo_Plato );
                    const product_list = response.data;
                    dispatch({ type: SET_MENU, payload: { menu_cats, product_list } })
                    return response.status;
                } else {
                    return false;
                }
            }
        ).catch(error => console.log(error))
        return response;
    }
}