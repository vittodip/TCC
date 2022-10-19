import "./index.scss";


export default function CardsAdmin(props) {

    

    

 



  return (
    <div className="card">
        {props.tipo === "A ser aprovado" && (
           
            //"section-cad-container"
          <div className={props.css}>
            <div className="container-colunas">
              <div >
                <label>Nome</label>
                <p>{props.nome}</p>
              </div>
              <div >
                <label>Telefone</label>
                <p>{props.telefone}</p>
              </div>
              <div >
                <label>CPF</label>
                <p>{props.cpf}</p>
              </div>
            </div>
            <div className="container-colunas">
              <div >
                <label>E-mail</label>
                <p>{props.email}</p>
              </div>
              <div >
                <label>Data de Nascimento</label>
                <p>{props.data}</p>
              </div>
              <div >
                <label>CRP</label>
                <p>{props.crp}</p>
              </div>
            </div>
          </div>
          )}

          {props.tipo === "denuncia psicologo" && (
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
                    <button>C</button>
                    <button>N</button>
              </div>

            </div>
          )}

          
          </div>

          
  );
}
