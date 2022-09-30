
import { carregarVoluntario } from "../../../api/voluntarioApi";
import Perfil from "../../../components/perfil";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './index.scss'



export default function PerfilVoluntario() {

  const [voluntario, setVoluntario] = useState([])

  const { voluntarioParam } = useParams();


  async function carregarPsicologo() {
    const resposta = await carregarVoluntario(voluntarioParam);
    setVoluntario(resposta);

  }


  useEffect(() => {
    carregarPsicologo();
  }, []);



  return (
    <main className="voluntario-perfil">
      <Perfil inicial={voluntario.nome} usuario={voluntario.nome} perfil="voluntario" />
      <div className="info-voluntario">
        <div className="infos-volunt">

          <div className="header-infos">
            <h2>Informações Gerais</h2>
            <img src="/assets/images/Edit.png" width={35} height={40} />
          </div>
          {/* coluna 1 */}
          <div className="colunas-vol">
            <div className="coluna1-vol">
              <h3>Nome</h3>
              <p>{voluntario.nome}</p>
              <h3>Telefone</h3>
              <p>{voluntario.telefone}</p>
              <h3>CPF</h3>
              <p>{voluntario.cpf}</p>
            </div>

            {/* coluna 2 */}
            <div className="coluna2-vol">
              <h3>E-mail</h3>
              <p>{voluntario.email}</p>
              <h3>Data de Nascimento</h3>
              <p>{String(voluntario.DataDeNascimento).substr(0, 10)}</p>
              <h3>CRP</h3>
              <p>{voluntario.crp}</p>
            </div>
            <div className="coluna3-vol">
              <div className="background-imagem"><img src="/assets/images/carregar 1.png" /></div>
            </div>
          </div>


        </div>
      </div>
      <div className="faixa-fichas">
        <div className="titulo-faixa-f">
          <h2>Fichas de atendimento</h2>
        </div>
        <div className="fichas">
          <div className="ficha-1">
            <div className="info-fichas">
              <div className="infos2">
                <h3>Nome</h3>
                <p>Bruno Virgilio da Silva</p>
              </div>
              <div className="infos2">
                <h3>Telefone</h3>
                <p>11987493745</p>
              </div>
              <div className="infos2">
                <h3>Nascimento</h3>
                <p>13/02/2006</p>
              </div>
            </div>
              <div className="solicitacoes-ficha">
                  <h3>Solicitação</h3>
                  <p>Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.</p>
              </div>
          </div>
          <div className="ficha-1">
            <div className="info-fichas">
              <div className="infos2">
                <h3>Nome</h3>
                <p>Bruno Virgilio da Silva</p>
              </div>
              <div className="infos2">
                <h3>Telefone</h3>
                <p>11987493745</p>
              </div>
              <div className="infos2">
                <h3>Nascimento</h3>
                <p>13/02/2006</p>
              </div>
            </div>
              <div className="solicitacoes-ficha">
                  <h3>Solicitação</h3>
                  <p>Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.</p>
              </div>
          </div>
        </div>
      </div>


    </main>
  );
}
