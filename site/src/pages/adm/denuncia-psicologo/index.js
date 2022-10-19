import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";
import { carregarDenunciasPsicologo } from "../../../api/adminApi";
import { useEffect, useState } from "react";

export default function DenunciasPsicologo() {
    


  return (
    <main className="adm-cadastros-principal">
        
        <Menu selecionado="a ser aprovado" />
        
      
      <section className='adm-cad-section'>
        <HeaderAdmin />
        
        <div className="section-cadastros">
            <CardsAdmin css="card-denuncia-psicologo" tipo='denuncia psicologo'  />
            
        </div>
       
      </section>
    </main>
  );
}