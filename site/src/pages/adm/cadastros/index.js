import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { PsicologosParaAprovar } from "../../../api/adminApi";
import { useEffect, useState } from "react";

export default function CadastrosPendentes() {
  const [voluntario, setVoluntario] = useState([]);

  async function carregarPsicosAprovar() {
    const resp = await PsicologosParaAprovar();
    setVoluntario(resp);
  }

  

  useEffect(() => {
    carregarPsicosAprovar();
  }, []);

  return (
    <main className="adm-cadastros-principal">
      <div className="menu">
        <Menu selecionado="a ser aprovado" />
      </div>
      

      <section className="adm-cad-section">
        <HeaderAdmin />
        
        <div className="section-cadastros">
          {voluntario.map((item) => (
            <CardsAdmin
              css="section-cad-container"
              psicologo={item.psicologo}
              tipo="A ser aprovado"
              nome={item.nome}
              telefone={item.telefone}
              cpf={item.cpf}
              email={item.email}
              data={item.data}
              crp={item.crp}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
