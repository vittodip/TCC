import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../../components/adm/header";
import Storage from 'local-storage'
import Menu from "../../../components/home";
import { mostrarUsuarios, buscarNomeUser } from "../../../api/usuarioApi";


export default function ListarUsers(){

    const [usuario, setUsuario] = useState([]);
    const [filtro, setFiltro] = useState('')

    async function filtrar(){
      const resp = await buscarNomeUser(filtro)
      setUsuario(resp)
    }

    async function carregarUsuario() {
        const resposta = await mostrarUsuarios();
    
        setUsuario(resposta);
      }

    const navigate = useNavigate();

    useEffect(() => {
        carregarUsuario();
        if(!Storage('admin-logado')) {
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
              <input type='search' placeholder="Pesquisar Usuario" value={filtro} onChange={e => setFiltro(e.target.value)} />
            </div>
            <img src="/assets/images/lupa.png" onClick={filtrar} />
          </div>

          {/* Listagem */}
          <div>
            {usuario.map(item =>
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
                </div>
              </main>
            )}


          </div>
        </div>

      </section>
    </main>
    
      )
    }
