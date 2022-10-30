import './index.scss'

export default function DenunciarPsicologo() {
    return (
        <main className='denunciar-psicologo-main'>

            <div className='painel-linear'>
                <div className='header-painel'>
                    <img src='/assets/images/logonat.png' />

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
                <div className='colunas'>
                    <div>
                        <label>Psicólogo</label>
                        <input placeholder='Nome e sobrenome' />
                        <label>
                            E-mail Psicólogo
                        </label>
                        <input placeholder='example@example.com' />
                    </div>
                    <div>
                        <label>
                            Paciente
                        </label>
                        <input placeholder='Nome e sobrenome' />
                        <label>
                            E-mail Paciente
                        </label>
                        <input placeholder='example@example.com' />
                    </div>
                    <div>
                    </div>
                    <textarea></textarea>
                    <button>Enviar</button>
                </div>
            </div>
        </main>
    )
}