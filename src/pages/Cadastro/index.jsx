import { Link } from "react-router-dom";
import "../../index.css";
import { useState } from "react";
import api from "../../services/api";

export default function Cadastro() {

  // const { id } = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [fone, setFone] = useState("");
  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   async function loadDados() {
  //     const response = await api.get(`/usuario/${id}`);
  //     setNome(response.data.nome);
  //     setEmail(response.data.email);
  //     setDate(response.data.date);
  //     setCpf(response.data.cpf);
  //     setRg(response.data.rg);
  //     setFone(response.data.fone);
  
  //     setLoading(false);

  //   }
  //   loadDados();

  // }, [id, nome, email, date, cpf, rg, fone]);

  if (loading) {
    return <div>Carregando...</div>;
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    cadastraUsuario(nome, password, email, date, cpf, rg, fone);
    setNome("");
    setPassword("");
    setEmail("");
    setDate("");
    setCpf("");
    setRg("");
    setFone("");

  }

  const cadastraUsuario = async (nome, password, email, date, cpf, rg, fone) => {
    const response = await api.post(`/usuario`, {
      nome,
      password,
      email,
      date,
      cpf,
      rg,
      fone,
    });
    if(response.data){
      let IdUsuario = response.data.IdUsuario;
      return history.push(`/enderecos/${IdUsuario}`);
    }
  }


  return(
    <>
    <div className="textoLogin">
      <h1>Faça seu cadastro</h1>
    </div>
    <div className="login">
      <form>
        <div className="inputlogin">
          <label >Nome </label>
          <input type="text" placeholder="nome" value={nome} onChange={e=> setNome(e.target.value)}  />
        </div>
        <div className="inputlogin">
          <label>Email </label>
          <input type="email" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>Senha </label>
          <input type="password" placeholder="password" value={password} onChange={e=> setPassword(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>Data Nascimento </label>
          <input type="date" placeholder="date" value={date} onChange={e=> setDate(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>CPF </label>
          <input type="text" placeholder="cpf" value={cpf} onChange={e=> setCpf(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>RG </label>
          <input type="text" placeholder="rg" value={rg} onChange={e=> setRg(e.target.value)} />
        </div>
        <div className="inputlogin">
          <label>Telefone </label>
          <input type="text" placeholder="fone" value={fone} onChange={e=> setFone(e.target.value)} />
        </div>
        <div className="inputlogin">
          <button type="submit" onClick={handleSubmit}>Salvar</button>
        </div>
       
      </form>
    </div>

  </>
  )
  }