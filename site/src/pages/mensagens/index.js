import './index.scss'

import BotaoBranco from '../../components/botao'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

import ChatHeader from '../../components/chat-header'


import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000'); 

export default function MensagensPage() {

    socket.emit('msg', 'VIM DO FRONT');
    socket.on('msg', async(data)=>{
        console.log(data);
    })
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
                        <div className='usu-info'>
                            <label>
                                Mateus Andrade
                                <p>Então a sessão tá marcada pra 00:00?</p>
                            </label>
                        </div>
                    </div>
                    <div className='selecionado-conversa'>
                        <img src='/assets/images/male-user.png'/>
                        <div className='usu-info'>
                            <label>
                                Mateus Andrade
                                <p>Então a sessão tá marcada pra 00:00?</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='session-chat'>
                <ChatHeader />
                <div className='chat'>
                    <div className='campo-mensagem-esquerda'>
                        <div className='mensagem-esquerda'>
                            <p>Me ajuda, eu so loco</p>
                        </div> 
                    </div>
                    <div className='campo-mensagem-direita'>
                        <div className='mensagem-direita'>
                            <p>procura um psicólogo</p>
                        </div> 
                    </div>
                </div>
                <div className='chat-input-container'>
                    <input type="text" />
                    <img src="/assets/images/sent.svg" alt="" />
                </div>
            </div>
        </main>
    )
}