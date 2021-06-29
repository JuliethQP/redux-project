import React, { Component } from 'react';
import '../styles/Table.css';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosActions';
import Fatal from './Fatal';
import { Link } from 'react-router-dom'
import Eye from './Eye';

class Usuarios extends Component {
    async componentDidMount() {
        this.props.traerTodos()
    }

    ponerFilas = () => (
        this.props.usuarios.map((usuario, index) =>
            <tr key={index}>
                <td>{usuario.name} </td>
                <td>{usuario.email} </td>
                <td>{usuario.website} </td>
                <td>
                    <Link to={`/publicaciones/${index}`}>
                        <Eye></Eye>
                    </Link>
                </td>
            </tr>
        )
    )

    ponerContenido = () => {
        if (this.props.cargando) {
            return (
                <div className="center">
                    <div className="lds-dual-ring"></div>
                </div>
            )
        }
        if (this.props.error) {

            return <Fatal mensaje={this.props.error}></Fatal>
        }
        return (
            <table className="tabla" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {this.ponerFilas()}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                {this.ponerContenido()}
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducers
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);