import { useEffect, useState } from "react";
import { carregarVoluntario } from "../../../api/voluntarioApi";
import { mostrarPsicologos } from "../../../api/voluntarioApi";
import Menu from "../../../components/home";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";
import ListarTudo from "../../../components/adm/tdsPsiEusers";
import "./index.scss";
import HeaderAdmin from "../../../components/adm/header";

export default function Index() {

  const [voluntario, setVoluntario] = useState([]);

  async function carregarPsicologo() {
    const resposta = await mostrarPsicologos();
    console.log(resposta)

    setVoluntario(resposta);
  }

  const navigate = useNavigate();


  useEffect(() => {
    carregarPsicologo();

  }, []);


  return (

    <main className="pagListar">
      <div>
        <Menu />
      </div>

      <section className="pagResto">
        <div>
          {/* Header */}
          <HeaderAdmin />
        </div>
        {/* Pesquisa */}

        <div className="listagemPsics">
          <div className="search">
            <div>
              <input type='search' placeholder="Pesquisar Voluntario" />
            </div>
            <img src="/assets/images/lupa.png" />
          </div>

          {/* Listagem */}
          <div>
            {voluntario.map(item =>
              <main className="listaBG">

                <div className="listaBlock">

                  <div className="listaItens">
                    <p>Nome</p>
                    <label> {item.nome} </label>
                  </div>
                  <div className="listaItens">
                    <p>Email</p>
                    <label>{item.email}</label>
                  </div>
                  <div className="listaItens">
                    <p>Data de Nascimento</p>
                    <label>{item.data}</label>
                  </div>
                  <div className="listaItens">
                    <p>Telefone</p>
                    <label>{item.telefone}</label>
                  </div>
                  <div className="listaItens">
                    <p>CPF</p>
                    <label>{item.cpf}</label>
                  </div>
                  <div className="listaItens">
                    <p>CRP</p>
                    <label>{item.crp}</label>
                  </div>
                </div>
              </main>
            )}


          </div>
        </div>

      </section>
    </main>

  )
}