import '../../index.css';
import { Link } from 'react-router-dom'


export default function Header(){

  return(
    <header>
      <Link className="links" to='/' >Login</Link>
      <Link className="links" to='/cadastro' >Cadastro</Link>
      <Link className="links" to='/enderecos' >Enderecos</Link>
      <Link className="links" to='/usuario' >Usuario</Link>

    </header>
  )
}