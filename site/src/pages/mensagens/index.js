import './index.scss'

import BotaoBranco from '../../components/botao'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

import ChatHeader from '../../components/chat-header'


import io from 'socket.io-client';
import { useEffect, useState } from 'react'
import Storage from 'local-storage';

import { enviarMensagem, mostrarMensagem, carregarChatsPsicologo, carregarNomeUsuario, carregarNomePsic, mostrarUltimaMensagem, carregarChatsUsuario } from '../../api/chatApi'

const socket = io.connect('http://localhost:5000');

export default function MensagensPage() {
    const [mensagem, setMensagem] = useState();
    const [mensagemLista, setMensagemLista] = useState([]);
    const [chats, setChats] = useState([]);
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('')

    async function envioMensagem(ev) {
        if (!mensagem.trim() || mensagem === '') {
            return;
        }
        else {
            if (ev && ev.key !== 'Enter')
                return;
            try {
                const tipo = Storage('voluntario-logado');
                if (tipo != null) {
                    const x = await enviarMensagem('voluntario', id, mensagem)
                    socket.emit('msg', id);
                    socket.on('msg', async (data) => {
                        setMensagemLista(data);
                        setMensagem('');
                    })
                }
                else {
                    const x = await enviarMensagem('paciente', id, mensagem)
                    socket.emit('msg', id);
                    socket.on('msg', async (data) => {
                        setMensagemLista(data);
                        setMensagem('');
                    })
                }
            }
            catch (err) {
                console.log(err.message)
            }
        }
    }

    async function carregarChats(idChat) {
        try {
            if (storage('voluntario-logado')) {
                const idPsic = Storage('voluntario-logado').id;
                const load = await carregarChatsPsicologo(idPsic)
                setChats(load);
            }
            else {
                const idUsuario = Storage('usuario-logado').id;
                const load = await carregarChatsUsuario(idUsuario)
                setChats(load);
            }
        }
        catch (err) {

        }
    }



    async function carregarMensagens(idChat) {
        try {
            setId(idChat)
            const resp = await mostrarMensagem(idChat);
            if (storage('voluntario-logado')) {
                const nome = await carregarNomeUsuario(idChat);
                setNome(nome.nome);
            }
            else if (storage('usuario-logado')) {
                const nome = await carregarNomePsic(idChat);
                setNome(nome.nome);
            }
            setMensagemLista(resp);
        }
        catch (err) {

        }
    }


    useEffect(() => {
        carregarChats();
    }, [[], chats]);

    useEffect(() => {
        VoltarBaixoClick()
    }, [mensagemLista]);

    useEffect(() => {
        if(!Storage('usuario-logado') && !Storage('voluntario-logado')) {
            navigate('/')
          }
        }, []);

    function VoltarBaixoClick() {
        var btn = document.querySelector("#back-to-down");
        btn.scrollTo(0, 10000);
    }

    const navigate = useNavigate();

    return (
        <main className='chat-main'>

            <div className='lateral-contatos'>
                <div className='header-contatos'>
                    <h2>Conversas</h2>
                    {storage('voluntario-logado') &&
                        <button onClick={() => [navigate('/perfil/voluntario')]}>Perfil</button>
                    }

                    {storage('usuario-logado') &&
                        <button onClick={() => [navigate('/perfil/usuario')]}>Perfil</button>
                    }

                    {storage('voluntario-logado') &&
                        <button onClick={() => [navigate('/solicitacoes')]}>Solicitações</button>
                    }

                </div>
                <div className='contatos'>
                    {chats.map(item =>
                        <div className='selecionado-conversa' onClick={() => carregarMensagens(item.idChat)}>

                            <img src='/assets/images/male-user.png' />
                            <div className='usu-info'>
                                <label>
                                    {item.nomeUsuario}
                                    <p>{item.mensagem.substr(0, 30)}...</p>


                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='session-chat'>
                {id === 0 &&
                    <div className='porcima'>
                        <img width={250} src='/assets/images/logo-login.png' />
                        <p>Te escutando de onde estiver, quando puder.</p>
                    </div>
                }
                <div>
                    <ChatHeader nome={nome} />
                </div>

                <div className='chat' id='back-to-down'>
                    {id !== 0 &&
                        <div>{mensagemLista.map(item =>
                            <div>
                                {storage('usuario-logado') &&
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
                                }
                                {storage('voluntario-logado') &&
                                    <div>
                                        {item.TP_REMETENTE === 'paciente' &&
                                            <div className='campo-mensagem-esquerda'>
                                                <div className='mensagem-esquerda'>
                                                    <p>{item.DS_MENSAGEM}</p>
                                                </div>
                                            </div>
                                        }
                                        {item.TP_REMETENTE === 'voluntario' &&
                                            <div className='campo-mensagem-direita'>
                                                <div className='mensagem-direita'>
                                                    <p>{item.DS_MENSAGEM}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        )}</div>
                    }
                </div>
                <div className='chat-input-container'>
                    <input type="text" value={mensagem} onKeyDown={envioMensagem} onChange={e => setMensagem(e.target.value)} />
                    <img src="/assets/images/sent.svg" alt="" value={mensagem} onClick={() => envioMensagem()} />
                </div>
            </div>
        </main>
    )
}