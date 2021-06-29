import React, {useReducer} from 'react';
import pedidosReducer from './pedidosReducer';
import PediContext from './pedidosContext';
import{ SELECCIONAR_PRODUCTO, CONFIRMAR_ORDENAR_PLATILLO, MOSTRAR_RESUMEN, ELIMINAR_PRODUCTO, PEDIDO_ORDENADO, SELECCCIONAR_PRODUCTO, CONFIRMAR_ORDEN_PLATILLO } from '../../tp';

const pedidosState = props => {

    const initialState = {
        pedido: [],
        platillo: null,
        total: 0,
        idPedido: ''
    };

    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCCIONAR_PRODUCTO,
            payload: platillo
        });
    };

    const guardarPedido = pedido => {
        dispatch({
            type: CONFIRMAR_ORDEN_PLATILLO,
            payload: pedido
        });

    };

    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        });
    };

    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        });
    };

    const pedidoRealizado = id =>{
        dispatch({
            type: PEDIDO_ORDENADO,
            payload: id
        });
    };

    return(
        <PediContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                idPedido: state.idPedido,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen,
                eliminarProducto,
                pedidoRealizado
            }}
        >
            {props.children}
        </PediContext.Provider>
    )
};

export default pedidosState;