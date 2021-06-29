import React from "react";
// import Layout from "./Layout";
// import Usuarios from "./page-usuarios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Publicaciones from "./Publicaciones";
import Usuarios from "./Usuarios";

const Tareas = () => <h1>tareas</h1>;

const Menu = () => (
    // <Layout>
        <Switch>
            <Route exact path="/" component={Usuarios} />
            <Route exact path="/tareas" component={Tareas} />
            <Route exact path="/publicaciones/:key" component={Publicaciones} />
            
        </Switch>
    // </Layout>

);

export default Menu;