import "./index.scss";

export default function CardsAdmin(props) {
  return (
    <div>
      {props.tipo === "A ser aprovado" && (
        <div className="section-cad-container">
          <div className="container-colunas">
            <div className="colunas-alinhamento">
              <label>Nome</label>
              <p>Nome e sobrenome</p>
            </div>
            <div className="colunas-alinhamento">
              <label>Telefone</label>
              <p>(00) 00000-0000</p>
            </div>
            <div className="colunas-alinhamento">
              <label>CPF</label>
              <p>000.000.000-00</p>
            </div>
          </div>
          <div className="container-colunas">
            <div className="colunas-alinhamento">
              <label>E-mail</label>
              <p>email-usuario@email.com</p>
            </div>
            <div className="colunas-alinhamento">
              <label>Data de Nascimento</label>
              <p>00/00/0000</p>
            </div>
            <div className="colunas-alinhamento">
              <label>CRP</label>
              <p>000.000.000-00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
