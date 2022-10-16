import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { PsicologosParaAprovar } from "../../../api/adminApi";
import { useEffect, useState } from "react";

export default function CadastrosPendentes() {
  const [voluntario, setVoluntario] = useState([])

  async function carregarPsicosAprovar() {
    const resp = await PsicologosParaAprovar();
    setVoluntario(resp)
}

    useEffect(() => {
      carregarPsicosAprovar();
    }, []); 

  return (
    <main className="adm-cadastros-principal">
        
        <Menu selecionado="a ser aprovado" />
        
      
      <section className='adm-cad-section'>
        <HeaderAdmin />
        {voluntario.map(item =>
        <div className="section-cadastros">
            <CardsAdmin tipo='A ser aprovado' nome={item.nome}
            telefone={item.telefone} cpf={item.cpf} email={item.email} data={item.data} crp={item.crp}/>
            
        </div>
          )}
      </section>
    </main>
  );
}
