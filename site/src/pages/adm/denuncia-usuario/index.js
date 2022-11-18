import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { carregarDenunciaUser, listarDenunciasUsuDepoimento } from "../../../api/adminApi";
import { useEffect, useState } from "react";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";


export default function DenunciasUsuarios() {
  const [denuncia, setDenuncia] = useState([]);
  const [denunciaDep, setDenunciaDep] = useState([]);
  
  const navigate = useNavigate()

  async function carregarDenunciasUsuario() {
    const resp = await carregarDenunciaUser();
    setDenuncia(resp);
  }

  async function carregarDenunciaUsuarioDep() {
    const resp = await listarDenunciasUsuDepoimento();
    setDenunciaDep(resp);
    
  }

  useEffect(() => {
    if(!Storage('admin-logado')) {
        navigate('admin/login')
      }
    }, []);

  useEffect(() => {
    carregarDenunciasUsuario();
    carregarDenunciaUsuarioDep();
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
            UsuarioDenuncia={item.usuario}
            css="card-denuncia-psicologo"
            tipo= "denuncia-usuario"
            
            nomeUsuario={item.nomeU}
            emailUsuario={item.email}
            solicitacao={item.assunto}
            />
            
            )}
          {denunciaDep.map(item => 
            <CardsAdmin
            tipo='denuncia-usuario-com-depoimento'
            css="card-denuncia-usuario-depoimento"
            nomePsi={item.nomepsi}
            nomeUsuario={item.nome}
            depoimento={item.texto}
            UsuarioDenuncia={item.usuario}
            DenunciaId={item.denuncia}
            />
          )}

        </div>
      </section>
    </main>
  );
}