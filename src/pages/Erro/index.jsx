import { Link } from 'react-router-dom';

export default function Erro(){

  return(
    <>
    <h1>Voce cliclou em um pagina q nao existe</h1>
    <Link to="/">Home</Link>
    </>
  )
}