
import Perfil from "../../../components/perfil"

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


import './index.scss'


import { carregarUsuario } from "../../../api/usuarioApi.js";

export default function PerfilUsuario() {
    const [usuario, setUsuario] = useState([]);
    
    const { usuarioParam } = useParams();

    useEffect(() => {
        carregarUser(); 
    }, []);


    async function carregarUser() {
        const resposta = await carregarUsuario(1);

    
        setUsuario(resposta);
    }

    console.log(usuario);
    return (
        <main className='usuario-perfil'>
            <Perfil perfil='usuario' />
            <div className='infos'>
                <div className='card-infos-gerais'>
                    <div className='card-titulo'>
                        <h2>Informações Gerais</h2>
                        <img src='/assets/images/Edit.png' />
                    </div>
                    <div>
                        <h3>
                            Nome
                        </h3>
                        <p>{usuario.nome}</p>
                        <h3>
                            E-mail
                        </h3>
                        <p>{usuario.email}</p>
                        <h3>
                            Telefone
                        </h3>
                        <p>{usuario.telefone}</p>
                        <h3>
                            CPF
                        </h3>
                        <p>{usuario.cpf}</p>
                        <h3>
                            Data de nascimento
                        </h3>
                        <p>{String(usuario.DataDeNascimento).substr(0,10)}</p>

                    </div>
                </div>
            </div>

            <div className='faixa-solicitar'>
                <h2>Suas Solicitações</h2>
                <div className='box-solicitacao'>
                    <div className='top-solicitacao'>
                        <p>Categorias:</p> <span>+</span>
                    </div>
                    <div className='text-solicitacao'>
                        <textarea type='text' placeholder='Digite sua solicitação'></textarea>    
                    </div>
                </div>
                <button>Enviar solicitação</button>
            </div>

            <div className='faixa-solicitacoes'>
                <div className='box-solicitacao'>
                    <div className='top-solicitacao-2'>
                        <p>20/09/2022 às 23:11 - Solicitação em aberto </p>
                        <img src='/assets/images/black-edit.png'/>
                        <img src='/assets/images/trash.png'/>
                    </div>
                    <div className='text-solicitacao'>
                        <hr/>
                        <p>Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.</p>
                        <hr/>

                    </div>
                    <div className='categorias-solicitacao'>
                        <div><p>Categorias: Burnout, estresse, neurose</p></div>
                        <div className='analise'><p>Em análise</p> <img src='/assets/images/eye.png'/></div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}