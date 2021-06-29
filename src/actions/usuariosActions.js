import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => { //es quien hace el llamado al reducer y hace el cambio de estado
    dispatch({
        type: CARGANDO
    })

    //funcion que retorna otra funcion
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch( //dispatch se comunica con los reducers
            {
                type: TRAER_TODOS,
                payload: response.data
            }
        )
    } catch (error) {
        console.log('error', error.message)
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}