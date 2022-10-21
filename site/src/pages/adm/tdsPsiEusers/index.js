import { useEffect, useState } from "react";
import { carregarVoluntario } from "../../../api/voluntarioApi";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";
import ListarTudo from "../../../components/adm/tdsPsiEusers";
import "./index.scss";

export default function Index() {

  const [voluntario, setVoluntario] = useState([]);
  
  async function carregarPsicologo() {
    const idPsic = Storage('voluntario-logado').id
    const resposta = await carregarVoluntario(idPsic);
    console.log(resposta)



    setVoluntario(resposta);
  }

  const navigate = useNavigate();


  useEffect(() => {
    carregarPsicologo();
    if(!Storage('voluntario-logado')) {
      navigate('/login/voluntario')
    }
  }, []);


  return (

    <main>

      {/* Header */}

      {/* Pesquisa */}
      <div>
        <div>
          <input type='text' placeholder="Pesquisar Voluntario" />
        </div>

        <img src="assets/images/lupa.png" />
      </div>

      {/* Listagem */}
      <div>
        {voluntario.map (item =>
          <div>
            <p>Nome</p>
            <label> {item.nome} </label>
          </div>
          
          )}

      </div>
    </main>

  )
}