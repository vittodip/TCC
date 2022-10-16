import "./index.scss";


export default function CardsAdmin(props) {

    

    

 



  return (
    <div>
        {props.tipo === "A ser aprovado" && (
           

          <div className="section-cad-container">
            <div className="container-colunas">
              <div className="colunas-alinhamento">
                <label>Nome</label>
                <p>{props.nome}</p>
              </div>
              <div className="colunas-alinhamento">
                <label>Telefone</label>
                <p>{props.telefone}</p>
              </div>
              <div className="colunas-alinhamento">
                <label>CPF</label>
                <p>{props.cpf}</p>
              </div>
            </div>
            <div className="container-colunas">
              <div className="colunas-alinhamento">
                <label>E-mail</label>
                <p>{props.email}</p>
              </div>
              <div className="colunas-alinhamento">
                <label>Data de Nascimento</label>
                <p>{props.data}</p>
              </div>
              <div className="colunas-alinhamento">
                <label>CRP</label>
                <p>{props.crp}</p>
              </div>
            </div>
          </div>
          )}
          
          </div>
  );
}
