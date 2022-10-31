import './index.scss'

import BotaoBranco from '../../components/botao'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

export default function MensagensPage() {


    const navigate = useNavigate();

    

    return (
        <main className='chat-main'>
            <div className='lateral-contatos'>
                <div className='header-contatos'>
                    <h2>Conversas</h2>
                    {storage('voluntario-logado') && 
                        <BotaoBranco botao='Perfil' onClick={() => [navigate('/perfil/voluntario')]}/>
                    }
                    
                    {storage('usuario-logado') && 
                        <BotaoBranco botao='Perfil' onClick={() => [navigate('/perfil/usuario')]}/>
                    }

                    {storage('voluntario-logado') && 
                        <BotaoBranco botao='Solicitações'/>
                    }
                    
                </div>
                <div className='contatos'>
                    <div className='selecionado-conversa'>
                        <img src='/assets/images/male-user.png'/>
                        <div>
                            <label>
                                Mateus Andrade
                                <p>Então a sessão tá marcada pra 00:00?</p>
                            </label>
                        </div>
                    </div>
                    <div className='selecionado-conversa'>
                        <img src='/assets/images/male-user.png'/>
                        <div>
                            <label>
                                Mateus Andrade
                                <p>Então a sessão tá marcada pra 00:00?</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>

            </div>
        </main>
    )
}