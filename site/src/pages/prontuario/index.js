import './index.scss'
import LogoHorizontal from '../../components/logos'


export default function Prontuario(){

    return(
        <main className="prontuario-principal">
            <div className="header">
                <div>
                    <LogoHorizontal />
                </div>
                <button className="voltar-button">Voltar</button>
            </div>
            <div className="botoes-juntos">
                <button className="voltar-button">Editar</button>
                <button className="voltar-button">Imprimir</button>
            </div>
            <div className="informacoes-importantes">
                <div className="info-align">
                    <h1>PSICOLOGIA - Need a Talk (ONG)</h1>
                    <div className="linha"></div>
                    <p>Paciente: Nome do paciente</p>
                    <p>Data da última edição: 21/05/2020</p>
                </div>
            </div>
            <section className="secao-anotacoes">
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Diag./HDA -  Diagnóstico e história da doença atual</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                    
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Reações frente ao diagnóstico</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Estado emocional atual e mecanismo de enfrentamento</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>História pessoal e familiar (avaliação psicossocial)</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Exame psíquico / Sinais e sintomas psicopatológicos</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className="sa-container-principal">
                    <div className="cp-titulo">
                        <h4>Anotações adicionais</h4>
                    </div>
                    <div className="input">
                        <textarea cols="30" rows="5"></textarea>
                    </div>
                </div>
            </section>
        </main>
    )
}