import { useEffect, useState } from "react";
import { mostrarPsicologos, buscarNomeVolunt } from "../../../api/voluntarioApi";
import Menu from "../../../components/home";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";
  
import "./index.scss";
import HeaderAdmin from "../../../components/adm/header";

export default function ListaVolunts() {


  const [voluntario, setVoluntario] = useState([]);
  const [filtro, setFiltro] = useState('')

  async function filtrar() {
    const resp = await buscarNomeVolunt(filtro)
    setVoluntario(resp)
  }

  async function carregarPsicologo() {
    const resposta = await mostrarPsicologos();
    console.log(resposta)

    setVoluntario(resposta);
  }

  const navigate = useNavigate();


  useEffect(() => {
    carregarPsicologo();
    if (!Storage('admin-logado')) {
      navigate('admin/login')
    }
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
              <input type='search' placeholder="Pesquisar Voluntario" value={filtro} onChange={e => setFiltro(e.target.value)} />
            </div>
            <img src="/assets/images/lupa.png" onClick={filtrar} />
          </div>

          {/* Listagem */}

          {voluntario.map(item =>
            <div className="listaBG">

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
            </div>
          )}
        </div>

      </section>
    </main>

  )
}