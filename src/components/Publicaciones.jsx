import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosActions';
import * as publicacionesActions from '../actions/publicacionesActions';
const { traerTodos: usuariosTraerTodos } = usuariosActions
// const { traerTodos: traerPorUsuario } = publicacionesActions
// const {traerPorUsuario } = publicacionesActions



class Publicaciones extends Component {
   async componentDidMount() {
        if (!this.props.usuariosReducers.usuarios.length) {
           await this.props.usuariosTraerTodos()           
        }
        this.props.traerPorUsuario(this.props.match.params.key)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Publicaciones</h1>
                <h2>{this.props.match.params.key} </h2>
            </div>
        )
    }
}
const mapStateToProps = ({ usuariosReducers, publicacionesReducers }) => {
    return { usuariosReducers, publicacionesReducers }
}

const mapDispatchToProps = {
    usuariosTraerTodos,
    ...publicacionesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);