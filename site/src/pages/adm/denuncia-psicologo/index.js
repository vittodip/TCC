import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { denunciaPsico } from "../../../api/adminApi";
import { useEffect, useState } from "react";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";

export default function DenunciasPsicologos() {
  const [denuncia, setDenuncia] = useState([]);
  
  const navigate = useNavigate()
  
  async function carregarDenunciasPsicologo() {
    try{
      const resp = await denunciaPsico();
      setDenuncia(resp);
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
    carregarDenunciasPsicologo()
  }, [])

  

  return (
    <main className="adm-cadastros-principal">
      <div className="menu">
        <Menu selecionado="Denúncia Psicólogo" Menu="Denúncia Psicólogo" />
      </div>
      

      <section className="adm-cad-section">
        <HeaderAdmin />
        
        <div className="section-cadastros">
          {denuncia.map(item => 
            <CardsAdmin 
            DenunciaId={item.denuncia}
            PsicologoDenuncia={item.psicologo}
            css="card-denuncia-psicologo"
            tipo= "denuncia-psicologo"
            nomePsi={item.nomepsi}
            nomeUsuario={item.nome}
            emailPsi={item.emailpsicologo}
            emailUsuario={item.email}
            depoimento={item.depoimento}
            />
            
            )}
            

        </div>
      </section>
    </main>
  );
}