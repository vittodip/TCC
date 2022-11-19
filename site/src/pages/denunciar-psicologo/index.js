import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'
import { denunciaPerfil, denunciaPerfilPsicologo, denunciaPerfilUsuario } from '../../api/denunciaApi';
import Storage from 'local-storage'
import './index.scss'


export default function DenunciarPsicologo() {
    const [paciente, setPaciente] = useState("");
    const [psicologo, setPsicologo] = useState("");
    const [emailPaci, setEmailPaci] = useState("");
    const [emailPsi, setEmailPsi] = useState("");
    const [depoimento, setDepoimento] = useState("");


    async function denunciarPsicologo() {
        try {
            const idPsic = Storage('voluntario-logado').id;
            const resposta = await denunciaPerfilPsicologo(paciente, psicologo, emailPaci, emailPsi, depoimento, idPsic);
            toast.success('Denuncia registrada.')
        } catch (err) {
            toast.error(err.message)
        }
    }

    async function denunciarUsuario() {
        try {
            const idUser = Storage('usuario-logado').id;
            const resposta = await denunciaPerfilUsuario(paciente, psicologo, emailPaci, emailPsi, depoimento, idUser);
            toast.success('Denuncia registrada.')
        } catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        if (!Storage('usuario-logado') && !Storage('voluntario-logado')) {
            navigate('/')
          }
    })

    const navigate = useNavigate();


    return (
        <main className='denunciar-psicologo-main'>
            <Toaster />

            <div className='painel-linear'>
                <div className='header-painel'>
                    <img src='/assets/images/logonat.png' width={200} />

                    {Storage('usuario-logado') && 
                        <button onClick={() => [navigate('/perfil/usuario')]}>Perfil</button>
                    }
                    {Storage('voluntario-logado') && 
                        <button onClick={() => [navigate('/perfil/voluntario')]}>Perfil</button>
                    }

                    
                </div>
                <div className='alinhamento-linear'>
                    <div className='titulo-desc'>
                        <h2>Denunciar</h2>
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
                            <input placeholder='Nome e sobrenome' value={psicologo} onChange={e => setPsicologo(e.target.value)} />
                        </label>

                        <label>
                            E-mail Psicólogo
                            <input placeholder='example@example' value={emailPsi} onChange={e => setEmailPsi(e.target.value)} />
                        </label>
                    </div>
                    <div className='linha'>
                        <label>
                            Paciente
                            <input placeholder='Nome e sobrenome' value={paciente} onChange={e => setPaciente(e.target.value)} />
                        </label>
                        <label>
                            E-mail Paciente
                            <input placeholder='example@example' value={emailPaci} onChange={e => setEmailPaci(e.target.value)} />
                        </label>
                    </div>
                    <div className='depoimento'>
                        <label>
                            Depoimento
                            <textarea value={depoimento} onChange={e => setDepoimento(e.target.value)}></textarea>
                        </label>
                        {Storage('voluntario-logado') && <button onClick={denunciarPsicologo}  >Enviar denúncia</button>}
                        {Storage('usuario-logado') && <button onClick={() => denunciarUsuario()}  >Enviar denúncia</button>}
                    </div>

                </div>
            </div>
        </main>
    )
}