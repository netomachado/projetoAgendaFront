import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Usuario from "./pages/Usuario";
import Cadastro from "./pages/Cadastro";
import Enderecos from "./pages/Enderecos";
import Erro from './pages/Erro'
import Header from "./components/Header";

function RouterApp() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/usuario" element={<Usuario />}/>  
        <Route path="/enderecos" element={<Enderecos />}/>
        <Route path="*" element={<Erro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;

{/* <Route path="/cadastro/:id" element={<Cadastro />} isPrivate/> */}