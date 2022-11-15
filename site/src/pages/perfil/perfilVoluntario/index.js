
import { buscarImagem, carregarVoluntario, colocarImagemVolunt } from "../../../api/voluntarioApi";
import { solicitacaoPsicologo, deletarSolicitacaoPsic } from "../../../api/solicitacaoApi";
import Perfil from "../../../components/perfil";

import { useEffect, useState } from "react";
import Storage from 'local-storage'
import './index.scss'
import Modal from 'react-modal'
import AlterarInfos from "../../../components/editar-infos";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { API_URL } from "../../../api/config";
import { consultarProntuarioUsuario, enviarProntuario } from "../../../api/prontuarioApi";
import { criarChat, checarChat } from "../../../api/chatApi";


export default function PerfilVoluntario() {

  const [voluntario, setVoluntario] = useState([])
  const [solicitacaoPsi, setSolicitacaoPsi] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imagem, setImagem] = useState('');

  async function carregarPsicologo() {
    const idPsic = Storage('voluntario-logado').id
    const resposta = await carregarVoluntario(idPsic);
    console.log(resposta)

    setVoluntario(resposta);
    setImagem(resposta.imagem);
  }


  async function carregarSolicitacoesAceitas() {
    const idPsic = Storage('voluntario-logado').id
    const resp = await solicitacaoPsicologo(idPsic);
    setSolicitacaoPsi(resp);
  }


  const navigate = useNavigate();


  useEffect(() => {
    carregarPsicologo();
    if (!Storage('voluntario-logado')) {
      navigate('/login/voluntario')
    }
    carregarSolicitacoesAceitas();
  }, []);

  useEffect(() => {
    carregarSolicitacoesAceitas();
  }, [solicitacaoPsi])


  useEffect(() => {
    if (typeof (imagem) === 'object') {
      let id = Storage('voluntario-logado').id;
      colocarImagemVolunt(id, imagem)
    }
  }, [imagem])



  Modal.setAppElement('#root');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItens: 'center',
      border: 'none',
      margin: 'none',
      backgroundColor: '#00000000',

    },
    overlay: {
      backgroundColor: '#000000ce'
    }
  };

  function colocarImagem() {
    document.getElementById('fotoVolunt').click();
  }

  function mostarFoto() {
    if (typeof (imagem) === 'string') {
      return API_URL  + '/' + imagem;
    }
    else
      return URL.createObjectURL(imagem)

  }

 

  function excluirSolicitacao(item) {
    confirmAlert({
      title:'Deseja excluir essa solicitação?',
      message:``,
      buttons:[
          {
              label:'Sim',
              onClick: async () => {
                const x = await deletarSolicitacaoPsic(item)
                toast('Solicitação Excluída!')
                        
              }
              
          },
          {
              label:'Não'
          }
      ]
  })
  }



  async function prontuario(idUsuario){
    try{
      const resp = await fetch(consultarProntuarioUsuario(idUsuario))
      if(resp.status === 404){
        let idPsic = Storage('voluntario-logado').id;
        const x = await enviarProntuario(idUsuario, idPsic);
        toast('Carregando prontuário...')
      }
      else{
        navigate(`/prontuario/${idUsuario}`)
      }
      
    }
    catch(err){
      toast(err.message)
    }
  }

  async function conversa(idUsuario){
    try{
      const idPsic = Storage('voluntario-logado').id;
      const check = await checarChat(idUsuario, idPsic);
      if(check === null) {
        const resp = await criarChat(idUsuario, idPsic);
        toast.loading('Criando chat...')
        navigate('/chat')
      }
      else{
        navigate('/chat')
      }
    }
    catch(err){
      toast(err.message)
    }
  }


  return (
    <main className="voluntario-perfil">
      <Toaster/>
      <Perfil inicial={voluntario.nome} usuario={voluntario.nome} perfil="voluntario" />
      <div className="info-voluntario">
        <div className="infos-volunt">

          <div className="header-infos">
            <h2>Informações Gerais</h2>
            <img src="/assets/images/Edit.png" width={35} height={40} onClick={openModal} />
            <Modal

              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}>
              <img src="/assets/images/excluir.png" width={30} height={30} onClick={closeModal} />
              <AlterarInfos perfil='voluntario' />

            </Modal>
          </div>
          {/* coluna 1 */}
          <div className="colunas-vol">
            <div className="coluna1-vol">
              <h3>Nome</h3>
              <p>{voluntario.nome}</p>
              <h3>Telefone</h3>
              <p>{voluntario.telefone}</p>
              <h3>CPF</h3>
              <p>{voluntario.cpf}</p>
            </div>

            {/* coluna 2 */}
            <div className="coluna2-vol">
              <h3>E-mail</h3>
              <p>{voluntario.email}</p>
              <h3>Data de Nascimento</h3>
              <p>{String(voluntario.DataDeNascimento).substr(0, 10)}</p>
              <h3>CRP</h3>
              <p>{voluntario.crp}</p>
            </div>

            {/* coluna 3 */}
            <div className="coluna3-vol">
              <div className="background-imagem" onClick={colocarImagem}>

                {!imagem &&
                  <img src="/assets/images/carregar 1.png" />
                }

                {imagem &&
                  <img className="fotoVoluntario" src={buscarImagem(voluntario.imagem)} alt='' />

                }

                <input type='file' id="fotoVolunt" onChange={e => setImagem(e.target.files[0])} />

              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="faixa-fichas">
        <div className="titulo-faixa-f">
          <h2>Fichas de atendimento</h2>
        </div>

        <div className="fichas">
          {solicitacaoPsi.map(item =>
            <div className="ficha-1">
              <div className="info-fichas">
                <div className="infos2">
                  <h3>Nome</h3>
                  <p>{item.usuario}</p>
                </div>
                <div className="infos2">
                  <h3>Telefone</h3>
                  <p>{item.telefone}</p>
                </div>
                <div className="infos2">
                  <h3>Nascimento</h3>
                  <p>{item.DataDeNascimento.substr(0, 10)}</p>
                </div>
              </div>
              <div className="solicitacoes-ficha">
                <h3>Solicitação</h3>
                <p>{item.texto}</p>
              </div>
              <div className="ficha-buttons">
                <button onClick={() => prontuario(item.idUsuario)}>Prontuário</button>
                <button onClick={() => conversa(item.idUsuario)}>Conversas</button>
                <button onClick={() => excluirSolicitacao(item.solicitacao)}>Excluir</button>
              </div>

            </div>
          )}
        </div>


      </div>


    </main>
  );
}
