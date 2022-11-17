import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { PsicologosParaAprovar } from "../../../api/adminApi";
import { useEffect, useState } from "react";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";

export default function CadastrosPendentes() {
  const [voluntario, setVoluntario] = useState([]);

  const navigate = useNavigate()
  

  async function carregarPsicosAprovar() {
    try{
      const resp = await PsicologosParaAprovar();
      setVoluntario(resp);
    }
    catch(err){

    }
  }

  useEffect(() => {
    if(!Storage('admin-logado')) {
        navigate('admin/login')
      }
    }, []);

  useEffect(() => {
    carregarPsicosAprovar();
  }, [voluntario]);

  return (
    <main className="adm-cadastros-principal">
      <div className="menu">
        <Menu selecionado="A Ser Aprovado" Menu="A Ser Aprovado" />
      </div>
      

      <section className="adm-cad-section">
        <HeaderAdmin />
        
        <div className="section-cadastros">
          {voluntario.map((item) => (
            <CardsAdmin
              css="section-cad-container"
              idPsicologo={item.psicologo}
              tipo="A ser aprovado"
              nome={item.nome}
              telefone={item.telefone}
              cpf={item.cpf}
              email={item.email}
              data={item.data}
              crp={item.crp}
              tipo2 = "aprovar-psicologo"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
