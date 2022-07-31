import { Link } from "react-router-dom";
import "../../index.css";
import { useState } from "react";
import api from "../../services/api";

export default function Home() {


  return (
    <>
      <div className="textoLogin">
        <h1>Bem vindo ao sistema de adm de agenda</h1>
      </div>
      <div className="login">
          
          <button type="submit">
            <Link to="/login">Entrar</Link>
          </button>
      </div>

    </>
  );
}
