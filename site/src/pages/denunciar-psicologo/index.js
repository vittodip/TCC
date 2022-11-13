import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { denunciarPsicologo } from '../../api/denunciaApi';
import './index.scss'


export default function DenunciarPsicologo() {

    const [psicologo, setPsicologo] = useState("");
    const [emailPsi, setEmailPsi] = useState("");
    const [ paciente, setPaciente] = useState("");
    const [emailPaci, setEmailPaci] = useState("");
    const [depoimento, setDepoimento] = useState("");
 

const navigate = useNavigate();

useEffect(() => {
   salvarDepoimento();
}, [])



 async function salvarDepoimento(){
    try {
        
    const tipo = await denunciarPsicologo(psicologo,emailPsi, paciente, emailPaci, depoimento);


    } catch (err) {
        toast.error(err.message);    
    }
 }

function voltarCLick(){
    navigate(`/`)
}


    return (
        <main className='denunciar-psicologo-main'>

            <div className='painel-linear'>
                <div className='header-painel'>
                    <img src='/assets/images/logonat.png' width={200} />

                    <button onClick={() => [navigate('/perfil/usuario')]}>Perfil</button>
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
                            <button onClick={salvarDepoimento}  >Enviar denúncia</button>
                        </div>                      
                    
                </div>
            </div>
        </main>
    )
}