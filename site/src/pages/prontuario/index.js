import './index.scss'
import LogoHorizontal from '../../components/logos'
import { consultarProntuarioUsuario, novoProntuario } from '../../api/prontuarioApi'
import { useNavigate, useParams } from 'react-router-dom'
import Storage from 'local-storage'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from "react-toastify";


export default function Prontuario(){

    const [nome, setNome] = useState();
    const [data, setData] = useState();
    const [diagnostico, setDiagnostico] = useState();
    const [reacoes, setReacoes] = useState();
    const [estado, setEstado] = useState();
    const [historia, setHistoria] = useState();
    const [exame, setExame] = useState();
    const [geral, setGeral] = useState();

    const { usuarioParam } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        carregarProntuario();
    }, [])

    async function carregarProntuario(){
        const resp = await consultarProntuarioUsuario(usuarioParam);
        setNome(resp.usuario)
        setData(resp.dataProntuario)
        setDiagnostico(resp.diagnostico)
        setReacoes(resp.reacoes)
        setEstado(resp.estado)
        setHistoria(resp.historia)
        setExame(resp.exame)
        setGeral(resp.geral)
    }

    async function editarProntuario(){
        try{
            const idPsic = Storage('voluntario-logado').id;
            console.log(idPsic)
            const edit = await novoProntuario(usuarioParam, idPsic, diagnostico, reacoes, estado, historia, exame, geral);
            toast.success('Edição registrada.')
        }
        catch(err){
            toast.error(err.message);
        }
    }

    function VoltarClick(){
        navigate('/perfil/voluntario')
    }

    return(
        <main className="prontuario-principal">
            <ToastContainer />
            <div className="header">
                <div>
                    <LogoHorizontal />
                </div>
                <button onClick={VoltarClick} className="voltar-button">Voltar</button>
            </div>
            <div className="botoes-juntos">
                <button className="voltar-button" onClick={() => editarProntuario()}>Editar</button>
                <button className="voltar-button">Imprimir</button>
            </div>
            <div className="informacoes-importantes">
                <div className="info-align">
                    <h1>PSICOLOGIA - Need a Talk (ONG)</h1>
                    <div className="linha"></div>
                    <p>Paciente: {nome}</p>
                    <p>Data da última edição: {String(data).substr(0,10)}</p>
                </div>
            </div>
            <section className="secao-anotacoes">
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Diag./HDA -  Diagnóstico e história da doença atual</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={diagnostico} onChange={e => setDiagnostico(e.target.value)}></textarea>
                    </div>
                    
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Reações frente ao diagnóstico</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={reacoes} onChange={e => setReacoes(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Estado emocional atual e mecanismo de enfrentamento</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={estado} onChange={e => setEstado(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>História pessoal e familiar (avaliação psicossocial)</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={historia} onChange={e => setHistoria(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Exame psíquico / Sinais e sintomas psicopatológicos</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={exame} onChange={e => setExame(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Anotações adicionais</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5" value={geral} onChange={e => setGeral(e.target.value)}></textarea>
                    </div>
                </div>
            </section>
        </main>
    )
}