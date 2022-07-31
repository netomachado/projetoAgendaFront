import { Link } from "react-router-dom";
import "../../index.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Usuario() {
  // const { id } = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [fone, setFone] = useState("");
  const [enderecos, setEnderecos] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function loadDados() {
  //    const response = await api.get(`/cadastro/${id}`);
  //     setNome(response.data.nome);
  //     setEmail(response.data.email);
  //     setDate(response.data.date);
  //     setCpf(response.data.cpf);
  //     setRg(response.data.rg);
  //     setFone(response.data.fone);
  //   }
  //   loadDados();
  // async function loadEnderecos() {
  //   const response = await api.get(`/enderecos/${id}`);
  //   setEnderecos(response.data);
  // }
  // loadEnderecos();

  // setLoading(false);
  // }, [id, nome, email, date, cpf, rg, fone, enderecos]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(nome, email, date, cpf, rg, fone);

    atualizaUsuario(nome, email, date, cpf, rg, fone);
  };

  const atualizaUsuario = async (nome, email, date, cpf, rg, fone) => {
    const response = await api.put(`/usuario/${id}`, {
      nome,
      email,
      date,
      cpf,
      rg,
      fone,
    });
    console.log(response.data);
    return;
  };

  return (
    <>
      <div className="textoLogin">
        <h1>Bem vindo a pagina de Usuario</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">CPF</th>
            <th scope="col">RG</th>
            <th scope="col">Fone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Nome">{nome}</td>
            <td data-label="Email">{email}</td>
            <td data-label="Data de Nascimento">{date}</td>
            <td data-label="CPF">{cpf}</td>
            <td data-label="RG">{rg}</td>
            <td data-label="Fone">{fone}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th scope="col">Rua</th>
            <th scope="col">Numero</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col">UF</th>
            <th scope="col">CEP</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {enderecos.map((endereco, id) => {
            return (
              <tr key={id}>
                <td data-label="Rua">{endereco.rua}</td>
                <td data-label="Numero">{endereco.num}</td>
                <td data-label="Bairro">{endereco.bairro}</td>
                <td data-label="Cidade">{endereco.cidade}</td>
                <td data-label="UF">{endereco.uf}</td>
                <td data-label="CEP">{endereco.cep}</td>
                <td data-label="#">
                  <button>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
