
import { carregarVoluntario } from "../../../api/voluntarioApi";
import Perfil from "../../../components/perfil";    
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './index.scss'



export default function PerfilVoluntario() {
    
   const [voluntario, setVoluntario] = useState([]) 
   
  const {voluntarioParam} = useParams();

  useEffect(() => {
    carregarPsicologo();
  }, []);

  async function carregarPsicologo() {
    const resposta = await carregarVoluntario(voluntarioParam);
    setVoluntario(resposta);
   
  }
  
    return (
      <main className="voluntario-perfil">
        <Perfil inicial={voluntario.nome} usuario={voluntario.nome} perfil="psicologo"/>

      </main>
    );
  }
  