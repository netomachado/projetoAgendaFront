import { Link } from "react-router-dom";
import "../../index.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Enderecos() {

  // const { id } = useParams();


  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [num, setNum] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  // useEffect(() => {
  //   async function loadUsuario(id) {
  //     const response = await api.get(`/usuario/${id}`);
  //     setNome(response.data.nome);

  //   }
  //   loadUsuario(id);
  // }, [nome]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rua, num, bairro, cep, cidade, uf);
    cadastraEndereco(nome, rua, num, bairro, cep, cidade, uf);
    setRua("");
    setNum("");
    setBairro("");
    setCep("");
    setCidade("");
    setUf("");

  }

  const cadastraEndereco = async (rua, num, bairro, cep, cidade, uf) => {
    const response = await api.post("/enderecos/${id}", {
      rua, 
      num, 
      bairro, 
      cep, 
      cidade, 
      uf
    });
    console.log(response.data[0].IdEndereco);
    return
  }


  return(
    <>
    <div className="textoLogin">
      <h1>Cadastre seus endereços</h1>
    </div>
    <div className="login">
      <form>
        <div className="inputlogin">
          <label >Rua </label>
          <input type="text" placeholder="rua" value={rua} onChange={e=> setRua(e.target.value)}  />
        </div>
        <div className="inputlogin">
          <label>Numero </label>
          <input type="text" placeholder="num" value={num} onChange={e=> setNum(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>Bairro </label>
          <input type="text" placeholder="bairro" value={bairro} onChange={e=> setBairro(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>CEP </label>
          <input type="text" placeholder="cep" value={cep} onChange={e=> setCep(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>Cidade </label>
          <input type="text" placeholder="cidade" value={cidade} onChange={e=> setCidade(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>UF </label>
          <input type="text" placeholder="uf" value={uf} onChange={e=> setUf(e.target.value)} />
        </div>
        <div className="inputlogin">
          <button type="submit" onClick={handleSubmit}>Cadastrar</button>
        </div>
        <div className="inputlogin">
        <button type="submit">
            <Link to="/usuario">Concluido</Link>
          </button>
        </div>
      </form>
    </div>
    <br />
    <br />
    <Link to="/usuario">Usuario</Link>
  </>
  )
  }