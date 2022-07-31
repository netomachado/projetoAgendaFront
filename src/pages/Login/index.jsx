import { Link } from "react-router-dom";
import "../../index.css";
import { useState } from "react";
import api from "../../services/api";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    hasUser(email, password);

    setEmail("");
    setPassword("");
  }

  const hasUser = async (email, password) => {
    const response = await api.get(`/login?email=${email}&password=${password}`);
    if (response.data.length > 0) {
      setUser(response.data[0].user.IdUsuario);
      let IdUsuario = response.data[0].user.IdUsuario;
      return history.push(`/usuario/${IdUsuario}`);
    } else {
      return history.push("/cadastro");
    }
  }

  return (
    <>
      <div className="textoLogin">
        <h1>Bem vindo a pagina de Login</h1>
        <h3>Insira seu usuario e senha</h3>
      </div>
      <div className="login">
        <form>
          <div className="inputlogin">
            <label >Email </label>
            <input type="text" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}  />
          </div>
          <div className="inputlogin">
            <label>Senha </label>
            <input type="password" placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)} />
          </div>
          <div className="inputlogin">
            <button type="submit" onClick={handleSubmit}>Entrar</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <Link to="/usuario">Usuario</Link>
    </>
  );
}