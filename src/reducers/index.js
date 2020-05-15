import { combineReducers } from 'redux';
import { stablishment, menu, cart } from "./Reducers";

export default combineReducers({
    stablishment,
    menu,
    cart
});
