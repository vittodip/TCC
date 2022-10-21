import { aprovarPsicologo, reprovarPsicologo, aceitarDenunciaPsi, aceitarDenunciaUser, recusarDenunciaUser, recusarDenunciaPsi } from "../../../api/adminApi";
import "./index.scss";
import { useEffect } from "react";

export default function CardsAdmin(props) {

  
  
  async function aprovarPsic(idPsicologo) {

    try {
      const resp = await aprovarPsicologo(idPsicologo);

      alert('Voluntário aprovado com sucesso!')
    } catch (err) {
      alert('Não foi possível aprovar.')
    }
  }

  async function reprovarPsic(idPsicologo) {

    try {
      const resp = await reprovarPsicologo(idPsicologo);

      alert('funfou')
    } catch (err) {
      alert('não funfou')
    }
  }



  async function aceitarDenunciaUsuario(idUsuario) {
    try {

      const resp = await aceitarDenunciaUser(idUsuario);

      alert('funfou')
    } catch (err) {
      alert('não funfou')
    }
  }

  async function recusarDenunciaUsuario(idUsuario) {
    try {
      const resp = await recusarDenunciaUser(idUsuario);

      alert('funfou')
    } catch (err) {
      alert('não funfou')     
    }
  }

  async function aceitarDenunciaPsicologo(idUsuario, denunciaId) {
    try {
      const resp = await aceitarDenunciaPsi(idUsuario, denunciaId);
      console.log(resp.data.status)
      alert('funfou')
    } catch (err) {
      alert('não funfou')
    }
  }

  async function recusarDenunciaPsicologo(idUsuario) {
    try {
      const resp = await recusarDenunciaPsi(idUsuario);

      alert('funfou')
    } catch (err) {
      alert('não funfou')     
    }
  }

  

  return (
    <div className="card">
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
            <button onClick={() => aceitarDenunciaPsicologo(props.PsicologoDenuncia, props.DenunciaId)}>
              <img src="/assets/images/botao-aprovar.svg" />
            </button>
            <button onClick={() => recusarDenunciaPsicologo(props.PsicologoDenuncia)}>
              <img src="/assets/images/botao-reprovar.svg" />
            </button>
          </div>
        </div>
      )}


    </div>

  )
}
