import logo from './logo.svg';
import './App.css';
import Table from './components/Usuarios';
import Menu from './components/Menu';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
