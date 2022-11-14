import './index.scss'
import { useEffect, useState } from 'react'

import { mostrarTodasSolicitações } from '../../api/solicitacaoApi'
import { useNavigate } from 'react-router-dom';
import { aceitarSolicitacao } from '../../api/solicitacaoApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Storage from 'local-storage'
import { checarChat, criarChat } from '../../api/chatApi';


export default function SolicitacoesPsic() {
    const [solicitacoes, setSolicitacoes] = useState([]);

    const navigate = useNavigate();

    async function carregarSolicitacao() {
        const resp = await mostrarTodasSolicitações();
        setSolicitacoes(resp)
    }
    

    async function aceitarSolicitacaoClick(idSolicitacao, idUsuario) {
        try {
            const idPsic = Storage('voluntario-logado').id;
            const r = await aceitarSolicitacao(idPsic, idSolicitacao);
            const ChatCheck = await checarChat(idUsuario, idPsic);
            if(!ChatCheck){
                const chat = await criarChat(idUsuario, idPsic);
                navigate('/chat');
            }
            else{
                toast("Atendimento oferecido!");
                navigate('/chat');
            }            
        }
        catch (err) {
            toast('Erro.')
        }
    }

    useEffect(() => {
        carregarSolicitacao();
    }, []);


    return (
        <main className="solicitacoes-principal">
            <ToastContainer />
            <header className='header'>
                <div className='hd-alinhamento-1'>
                    <img src="/assets/images/logonat.png" alt="" />
                    <div className="hd-alinhamento-buttons">
                        <button onClick={() => [navigate('/chat')]}>Conversas</button>
                        <button onClick={() => [navigate('/perfil/voluntario')]} >Perfil</button>
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

                {solicitacoes.map(item =>
                    <div key='Listagem' className="container-principal">
                        <div className="cp-info-date">
                            <img src="/assets/images/perfil-anonimo-icon.svg" alt='' />
                            <p>{item.data.substr(0, 10)}</p>
                        </div>
                        <div className="cp-texto">
                            <p>{item.texto}</p>
                        </div>
                        <div className="cp-funcionalidades">
                            <p></p>

                            <div className="alinhamento">
                                <img src="/assets/images/spam-denuncia-icon.svg" alt="" />
                                <button onClick={() => aceitarSolicitacaoClick(item.id_solicitacao, item.idUsuario)}>Oferecer atendimento</button>
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </main>
    )
}

