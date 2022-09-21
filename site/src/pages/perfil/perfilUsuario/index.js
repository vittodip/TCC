
import Perfil from "../../../components/perfil"

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


import './index.scss'
import { ToastContainer, toast } from 'react-toastify';


import { carregarUsuario } from "../../../api/usuarioApi.js";
import { carregarSolicitacao } from "../../../api/solicitacaoApi.js";
import { inserirSolicitacao } from "../../../api/solicitacaoApi.js";

export default function PerfilUsuario() {
    const [usuario, setUsuario] = useState([]);

    const [solicitacao, setSolicitacao] = useState([]);
    
    const { usuarioParam } = useParams();

    useEffect(() => {
        carregarUser();
        solicitacaoCarregar();
    }, []);


    async function carregarUser() {
        const resposta = await carregarUsuario(usuarioParam);
        setUsuario(resposta);
    }

    
    async function solicitacaoCarregar() {
        const resposta = await carregarSolicitacao(usuarioParam);
        setSolicitacao(resposta);
    }
    

    return (
        <main className='usuario-perfil'>
            
            <Perfil inicial={usuario.nome} usuario={usuario.nome} perfil='usuario' />
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
                        <textarea type='text' placeholder='Digite sua solicitação' ></textarea>    
                    </div>
                </div>
                <button>Enviar solicitação</button>
            </div>

            <div className='faixa-solicitacoes'>
                {solicitacao.map(item => 
                        <div className='box-solicitacao'>
                            <div className='top-solicitacao-2'>
                                <p> {item.horario} - Solicitação em aberto </p>
                                <img src='/assets/images/black-edit.png'/>
                                <img src='/assets/images/trash.png'/>
                            </div>
                            <div className='text-solicitacao'>
                                <hr/>
                                    <p>{item.texto}</p>
                                <hr/>

                            </div>
                            <div className='categorias-solicitacao'>
                                <div><p>Categorias: Burnout, estresse, neurose</p></div>
                                <div className='analise'><p>{item.situacao ? "Atendido" : "Em análise"}</p> <img src='/assets/images/eye.png'/></div>
                            </div>
                        </div>
                    )}
                
                
            </div>
        </main>
    )
}