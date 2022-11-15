import { aprovarPsicologo, reprovarPsicologo, aceitarDenunciaPsi, aceitarDenunciaUser, recusarDenunciaUser, recusarDenunciaPsi } from "../../../api/adminApi";
import "./index.scss";
import { useEffect } from "react";
import { toast, Toaster } from 'react-hot-toast'

export default function CardsAdmin(props) {



  async function aprovarPsic(idPsicologo) {

    try {
      const resp = await aprovarPsicologo(idPsicologo);

      toast('Voluntário aprovado com sucesso!')
    } catch (err) {
      toast('Não foi possível aprovar.')
    }
  }

  async function reprovarPsic(idPsicologo) {

    try {
      const resp = await reprovarPsicologo(idPsicologo);

      toast('funfou')
    } catch (err) {
      toast('não funfou')
    }
  }



  async function aceitarDenunciaUsuario(usuarioId) {
    try {

      const resp = await aceitarDenunciaUser(usuarioId);

      toast('funfou')
    } catch (err) {
      toast('não funfou')
    }
  }

  async function recusarDenunciaUsuario(denunciaId) {
    try {
      const resp = await recusarDenunciaUser(denunciaId);

      toast('funfou')
    } catch (err) {
      toast('não funfou')
    }
  }

  async function aceitarDenunciaPsicologo(PsicologoDenuncia) {
    try {
      const resp = await aceitarDenunciaPsi(PsicologoDenuncia);
      toast('funfou')
    } catch (err) {
      toast('não funfou')
    }
  }

  async function recusarDenunciaPsicologo(DenunciaId) {
    try {
      const resp = await recusarDenunciaPsi(DenunciaId);

      toast('funfou')
    } catch (err) {
      toast('não funfou')
    }
  }



  return (
    <div className="card">
      <Toaster/>
      {props.tipo === "A ser aprovado" && (
        //"section-cad-container"
        <div className={props.css}>
          <div className="container-colunas-alinhamento">
            <div className="container-colunas">
              <div>
                <label>Nome</label>
                <p>{props.nome}</p>
              </div>
              <div>
                <label>Telefone</label>
                <p>{props.telefone}</p>
              </div>
              <div>
                <label>CPF</label>
                <p>{props.cpf}</p>
              </div>
            </div>
            <div className="container-colunas">
              <div>
                <label>E-mail</label>
                <p>{props.email}</p>
              </div>
              <div>
                <label>Data de Nascimento</label>
                <p>{props.data}</p>
              </div>
              <div>


                <label>CRP</label>
                <p>{props.crp}</p>
              </div>
            </div>
          </div>
          {props.tipo2 === "aprovar-psicologo" && (
            <div className="botoes">
              <button onClick={() => aprovarPsic(props.idPsicologo)}>
                <img src="/assets/images/botao-aprovar.svg" />
              </button>
              <button onClick={() => reprovarPsic(props.idPsicologo)} >
                <img src="/assets/images/botao-reprovar.svg" />
              </button>
            </div>

          )}



        </div>)}

      {props.tipo === "denuncia-psicologo" && (
        <div className={props.css}>
          <div className="infos-usuarios">
            <div className="usuarios">
              <label>Psicólogo</label>
              <p>{props.nomePsi}</p>
              <label>Usuário</label>
              <p>{props.nomeUsuario}</p>
            </div>
            <div className="emails">
              <label>E-mail</label>
              <p>{props.emailPsi}</p>
              <label>E-mail</label>
              <p>{props.emailUsuario}</p>
            </div>
          </div>
          <div className="depoimento">
            <label>Depoimento</label>
            <p>{props.depoimento}</p>
          </div>

          <div className="botoes">
            <button onClick={() => aceitarDenunciaPsicologo(props.PsicologoDenuncia)}>
              <img src="/assets/images/botao-aprovar.svg" />
            </button>
            <button onClick={() => recusarDenunciaPsicologo(props.DenunciaId)}>
              <img src="/assets/images/botao-reprovar.svg" />
            </button>
          </div>
        </div>
      )}

      {props.tipo === "denuncia-usuario" && (
        <div className={props.css}>
          <div className="infos-usuarios">
              <div>
                <label>Nome</label>
                <p>{props.nomeUsuario}</p>
              </div>
              <div>
                <label>E-mail</label>
                <p>{props.emailUsuario}</p>
              </div>
            </div>
          <div className="depoimento">
            <label>Solicitação</label>
            <p>{props.solicitacao}</p>
          </div>

          <div className="botoes">
            <button onClick={() => aceitarDenunciaUsuario(props.UsuarioDenuncia)}>
              <img src="/assets/images/botao-aprovar.svg" />
            </button>
            <button onClick={() => recusarDenunciaUsuario(props.DenunciaId)}>
              <img src="/assets/images/botao-reprovar.svg" />
            </button>
          </div>
        </div>
      )}


    </div>

  )
}
