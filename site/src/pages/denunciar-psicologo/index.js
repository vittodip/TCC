import './index.scss'



export default function DenunciarPsicologo() {
    return (
        <main className='denunciar-psicologo-main'>

            <div className='painel-linear'>
                <div className='header-painel'>
                    <img src='/assets/images/logonat.png' width={200} />

                    <button>Perfil</button>
                </div>
                <div className='alinhamento-linear'>
                    <div className='titulo-desc'>
                        <h2>Denunciar Psicólogo</h2>
                        <p>Sua denuncia será enviada e revisada por administradores.
                            Ela é muito importante para a manutenção da segurança de nosso site!
                        </p>
                    </div>
                    <img className='manutencao-img' src='/assets/images/manutencao.png' />
                </div>

            </div>
            <div className='campos-denuncia-psic'>
                <div className='campos-input'>
                   
                        <div className='linha'>
                            <label>
                                Psicólogo
                                <input placeholder='Nome e sobrenome' />
                            </label>
                            
                            <label>
                                E-mail Psicólogo
                                <input placeholder='example@example' />
                            </label>
                        </div>
                        <div className='linha'>
                            <label>
                                Paciente
                                <input placeholder='Nome e sobrenome' />
                            </label>
                            <label>
                                E-mail Paciente
                                <input placeholder='example@example' />
                            </label>
                        </div>  
                        <div className='depoimento'>
                            <label>
                                Depoimento
                                <textarea></textarea>
                            </label>
                            <button>Enviar denúncia</button>
                        </div>                      
                    
                </div>
            </div>
        </main>
    )
}