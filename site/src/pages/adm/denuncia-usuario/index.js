import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { carregarDenunciaUser } from "../../../api/adminApi";
import { useEffect, useState } from "react";

export default function DenunciasUsuarios() {
  const [denuncia, setDenuncia] = useState([]);
  

  async function carregarDenunciasUsuario() {
    const resp = await carregarDenunciaUser();
    setDenuncia(resp);
    
  }

  useEffect(() => {
    carregarDenunciasUsuario()
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
            UsuarioDenuncia={item.idUser}
            css="card-denuncia-psicologo"
            tipo= "denuncia-usuario"
            
            nomeUsuario={item.nome}
            emailUsuario={item.email}
            solicitacao={item.solicitacao}
            />
            
            )}

        </div>
      </section>
    </main>
  );
}