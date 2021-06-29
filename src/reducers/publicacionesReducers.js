import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes';
const INITAL_STATE = {
    publicaciones: [],
    cargando: false,
    error: ''
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case TRAER_POR_USUARIO:
            return {
                ...state,
                publicaciones: action.payload,
                cargando: false
            }
        case CARGANDO:
            return { ...state, cargando: true }
        case ERROR:
            return { ...state, error: action.payload, cargando: false }

        default: return state;
    }
}