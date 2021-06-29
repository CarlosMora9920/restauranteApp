import { OBTENER_PRODUCTOS_EXITO } from "../../tp";

export default (state, action) => {
    switch(action.tp){
        case OBTENER_PRODUCTOS_EXITO:
            return{
                ...state,
                menu: action.payload
            }
        default:
            return state;
    }
};