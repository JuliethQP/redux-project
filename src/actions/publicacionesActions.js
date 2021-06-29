import { computeHeadingLevel } from '@testing-library/dom';
import axios from 'axios';
import { TRAER_POR_USUARIO, ERROR, CARGANDO } from '../types/publicacionesTypes';

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.get('http://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: TRAER_POR_USUARIO,
            payload: respuesta.data
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { usuarios } = getState().usuariosReducers
    const { publicaciones } = getState().publicacionesReducers
    const user_id = usuarios[key].id
    try {
        const respuesta = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        dispatch({
            type: TRAER_POR_USUARIO,
            payload: respuesta.data
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

