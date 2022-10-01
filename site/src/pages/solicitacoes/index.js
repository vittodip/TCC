import './index.scss'
import { useState } from 'react'



export default function SolicitacoesPsic() {

    const [solicitacoes, setSolicitacoes] = useState([]);


    return (
        <main className="solicitacoes-principal">
            <header className='header'>
                <div className='hd-alinhamento-1'>
                    <img src="/assets/images/logonat.png" alt="" />
                    <div className="hd-alinhamento-buttons">
                        <button>Conversas</button>
                        <button>Perfil</button>
                    </div>
                </div>
                <div className='hd-alinhamento-2'>
                    <div>
                        <h1>Solicitações</h1>
                        <p>Nessa página você encontrará todas as solicitações que ainda não receberam atendimento.</p>
                        <p>Mais informações sobre o paciente ficarão disponíveis apenas se você oferecer seu atendimento.</p>
                    </div>
                    <img src="/assets/images/mulher-livros.png" alt="" />
                </div>
            </header>
            <section className="secao-solicitacao">

                <div className="container-principal">
                    <div className="cp-info-date">
                        <img src="/assets/images/perfil-anonimo-icon.svg" alt="" />
                        <p>Solicitação em aberto - 23/09/2022 às 13:00</p>
                    </div>
                    <div className="cp-texto">
                        <p>Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.
                        </p>
                    </div>
                    <div className="cp-funcionalidades">
                        <p>Categorias: Burnout, estresse, neurose</p>

                        <div className="alinhamento">
                            <img src="/assets/images/spam-denuncia-icon.svg" alt="" />
                            <button>Oferecer atendimento</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

