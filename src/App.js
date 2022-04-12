import logo from './logo.svg';
import './App.css';
import Header from './components/header/index'
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';

//Fazendo a Procura de Rotas e Carregamento
export default function App(){
  return(
    <>
      <Header/>
      <Router>
        <Routes/>
      </Router>
    </>
  )
}



