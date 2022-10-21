import { aprovarPsicologo } from "../../../api/adminApi";
import "./index.scss";

export default function CardsAdmin(props) {
  
  async function aprovarPsic(idPsicologo) {
    
    try {
      const resp = await aprovarPsicologo(idPsicologo);
      
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
          <div className="botoes">
              <button onClick={() => aprovarPsic(id_psicologo)}>
                <img src="/assets/images/botao-aprovar.svg" />
              </button>
              <button>
                <img src="/assets/images/botao-reprovar.svg" />
              </button>
            </div>
        </div>
      )}

      
    </div>

  );
}
