import{
    MOSTRAR_RESUMEN,
    ELIMINAR_PRODUCTO,
    PEDIDO_ORDENADO,
    SELECCCIONAR_PRODUCTO,
    CONFIRMAR_ORDEN_PLATILLO
}from '../../tp';


export default (state, action) => {
    switch(action.tp) {
        case SELECCCIONAR_PRODUCTO:
            return {
                ...state,
                platillo: action.payload
            }
        case CONFIRMAR_ORDEN_PLATILLO:
            return {
                ...state,
                pedido: [...state.pedido, action.payload]
            }
        case MOSTRAR_RESUMEN:
            return {
                ...state,
                total: action.payload
            }
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                pedido: state.pedido.filter(articulo => articulo.id !== action.payload)
            }
        case PEDIDO_ORDENADO:
            return {
                ...state,
                pedido: [],
                total: 0,
                idPedido: action.payload
            }
        default:
            return state
    }
};