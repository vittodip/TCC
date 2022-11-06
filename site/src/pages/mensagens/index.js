import './index.scss'

import BotaoBranco from '../../components/botao'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

import ChatHeader from '../../components/chat-header'


import io from 'socket.io-client';
import { useEffect, useState } from 'react'
import Storage from 'local-storage';

import { enviarMensagem, mostrarMensagem, carregarChatsPsicologo, carregarNome } from '../../api/chatApi'

const socket = io.connect('http://localhost:5000');

export default function MensagensPage() {
    const [mensagem, setMensagem] = useState();
    const [mensagemLista, setMensagemLista] = useState([]);
    const [chats, setChats] = useState([]);

    async function envioMensagem(idChat) {
        try {
            const tipo = Storage('voluntario-logado');
            if (tipo != null) {
                const x = await enviarMensagem('voluntario', idChat, mensagem)
                socket.emit('msg', idChat);
                socket.on('msg', async (data) => {
                    setMensagemLista(data);
                })
            }
            else {
                const x = await enviarMensagem('paciente', idChat, mensagem)
                socket.emit('msg', idChat);
                socket.on('msg', async (data) => {
                    setMensagemLista(data);
                })
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    async function carregarChats() {
        try {
            const idPsic = Storage('voluntario-logado').id;
            const load = await carregarChatsPsicologo(idPsic)
            setChats(load.data);
        }
        catch (err) {

        }
    }

    async function carregarNome(id){
        try{
            
            
        }
        catch(err){

        }
    }


    useEffect(() => {
        carregarChats();
    }, []);

    const navigate = useNavigate();



    return (
        <main className='chat-main'>

            <div className='lateral-contatos'>
                <div className='header-contatos'>
                    <h2>Conversas</h2>
                    {storage('voluntario-logado') &&
                        <BotaoBranco botao='Perfil' onClick={() => [navigate('/perfil/voluntario')]} />
                    }

                    {storage('usuario-logado') &&
                        <BotaoBranco botao='Perfil' onClick={() => [navigate('/perfil/usuario')]} />
                    }

                    {storage('voluntario-logado') &&
                        <BotaoBranco botao='Solicitações' />
                    }

                </div>
                <div className='contatos'>
                    {chats.map(item =>
                        <div className='selecionado-conversa'>
                            <img src='/assets/images/male-user.png' />
                            <div className='usu-info'>
                                <label>
                                    {item.nome}
                                    <p>Então a sessão tá marcada pra 00:00?</p>
                                </label>
                            </div>
                        </div>
                    )}

                    <div className='selecionado-conversa'>
                        <img src='/assets/images/male-user.png' />
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
                    {mensagemLista.map(item =>
                        <div>
                            {item.TP_REMETENTE === 'voluntario' &&
                                <div className='campo-mensagem-esquerda'>
                                    <div className='mensagem-esquerda'>
                                        <p>{item.DS_MENSAGEM}</p>
                                    </div>
                                </div>
                            }
                            {item.TP_REMETENTE === 'paciente' &&
                                <div className='campo-mensagem-direita'>
                                    <div className='mensagem-direita'>
                                        <p>{item.DS_MENSAGEM}</p>
                                    </div>
                                </div>
                            }

                        </div>
                    )}

                </div>
                <div className='chat-input-container'>
                    <input type="text" onChange={e => setMensagem(e.target.value)} />
                    <img src="/assets/images/sent.svg" alt="" onClick={() => envioMensagem(1)} />
                </div>
            </div>
        </main>
    )
}