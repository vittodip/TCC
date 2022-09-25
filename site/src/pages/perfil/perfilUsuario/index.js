import Perfil from "../../../components/perfil";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "local-storage";

import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { carregarUsuario } from "../../../api/usuarioApi.js";
import { listarSolicitacao } from "../../../api/solicitacaoApi.js";
import { inserirSolicitacao } from "../../../api/solicitacaoApi.js";

export default function PerfilUsuario() {
  const [usuario, setUsuario] = useState([]);

  const [solicitacao, setSolicitacao] = useState([]);

  const { usuarioParam } = useParams();

  const [assunto, setAssunto] = useState("");
  const [situacaoSol, setSituacaoSol] = useState(false);

  useEffect(() => {
    carregarUser();
    carregarTodasSolicitacoes();
  }, []);

  async function carregarUser() {
    const resposta = await carregarUsuario(usuarioParam);
    setUsuario(resposta);
  }

  async function carregarTodasSolicitacoes(){
    const resp = await listarSolicitacao()
    setSolicitacao(resp)
  }

  async function cadastrarSolicitacao() {
    try {
      const resp = await inserirSolicitacao(usuarioParam, assunto, situacaoSol);
      toast("Solicitacao cadastrada com sucesso");
    } catch (err) {
      toast(err.response.data.erro);
    }
  }

  return (
    <main className="usuario-perfil">
      <Perfil inicial={usuario.nome} usuario={usuario.nome} perfil="usuario" />
      <div className="infos">
        <ToastContainer />
        <div className="card-infos-gerais">
          <div className="card-titulo">
            <h2>Informações Gerais</h2>
            <img src="/assets/images/Edit.png" />
          </div>
          <div>
            <h3>Nome</h3>
            <p>{usuario.nome}</p>
            <h3>E-mail</h3>
            <p>{usuario.email}</p>
            <h3>Telefone</h3>
            <p>{usuario.telefone}</p>
            <h3>CPF</h3>
            <p>{usuario.cpf}</p>
            <h3>Data de nascimento</h3>
            <p>{String(usuario.DataDeNascimento).substr(0, 10)}</p>
          </div>
        </div>
      </div>

      <div className="faixa-solicitar">
        <h2>Suas Solicitações</h2>
        <div className="box-solicitacao">
          <div className="top-solicitacao">
            <p>Categorias:</p> <span>+</span>
          </div>
          <div className="text-solicitacao">
            <textarea
              onChange={(e) => setAssunto(e.target.value)}
              type="text"
              placeholder="Digite sua solicitação"
            ></textarea>
          </div>
        </div>
        <button onClick={cadastrarSolicitacao}>Enviar solicitação</button>
      </div>


      
    </main>
  );
}
