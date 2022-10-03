import './index.scss'
import { useEffect, useState } from 'react'

import { mostrarTodasSolicitações } from '../../api/solicitacaoApi'
import { useNavigate } from 'react-router-dom';
import { aceitarSolicitacao } from '../../api/solicitacaoApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function SolicitacoesPsic() {
    const [solicitacoes, setSolicitacoes] = useState([]);

    const navigate = useNavigate();

    async function carregarSolicitacao() {
        const resp = await mostrarTodasSolicitações();
        setSolicitacoes(resp)
    }

    async function aceitarSolicitacaoClick(idSolicitacao) {
        try{
            const idSoli = idSolicitacao
            const idPsic = Storage('usuario-logado').id

            const r = await aceitarSolicitacao(idPsic, idSoli)
            console.log(r)
            toast("Atendimento oferecido!")
        }
        catch (err){
            toast('erro')
        }
        
        
    }

    useEffect(() => {
        carregarSolicitacao();
    }, []); 

    function irPerfil () {
        navigate('/perfil/voluntario')
    }

    return (
        <main className="solicitacoes-principal">
            <ToastContainer />
            <header className='header'>
                <div className='hd-alinhamento-1'>
                    <img src="/assets/images/logonat.png" alt="" />
                    <div className="hd-alinhamento-buttons">
                        <button>Conversas</button>
                        <button onClick={irPerfil} >Perfil</button>
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
                        <p>{item.data.substr(0,10)}</p>
                    </div>
                    <div className="cp-texto">
                        <p>{item.texto}</p>
                    </div>
                    <div className="cp-funcionalidades">
                        <p></p>

                        <div className="alinhamento">
                            <img src="/assets/images/spam-denuncia-icon.svg" alt="" />
                            <button onClick={() => aceitarSolicitacaoClick(item.id_solicitacao)}>Oferecer atendimento</button>
                        </div>
                    </div>
                </div>
                )}

            </section>
        </main>
    )
}

