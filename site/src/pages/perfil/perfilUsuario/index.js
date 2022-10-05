import Perfil from "../../../components/perfil";

import { useEffect, useState } from "react";
import Storage  from 'local-storage';

import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AlterarInfos from "../../../components/editar-infos";
import Modal from 'react-modal'
import { carregarUsuario } from "../../../api/usuarioApi.js";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { listarSolicitacao, inserirSolicitacao, alterarSolicitacao, deletarSolicitacao } from "../../../api/solicitacaoApi.js";


export default function PerfilUsuario() {
  const [usuario, setUsuario] = useState([]);
  const [solicitacao, setSolicitacao] = useState([]);
  const [novoAssunto, setNovoAssunto] = useState("");
  const [assunto, setAssunto] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
 

  async function carregarUser() {
    const idUser = Storage('usuario-logado').id
    const resposta = await carregarUsuario(idUser);
    setUsuario(resposta);
  }

  async function carregarTodasSolicitacoes(){
    const idUser = Storage('usuario-logado').id
    const resp = await listarSolicitacao(idUser)
    setSolicitacao(resp)
  }

  async function cadastrarSolicitacao() {
    try {
      const idUser = Storage('usuario-logado').id

      const resp = await inserirSolicitacao(idUser , assunto);
      
      toast("Solicitação feita com sucesso");
      
    } catch (err) {
      toast(err.response.data.erro);
    }
  }

  async function mudarSolicitacao(id) {
    
    const r = await alterarSolicitacao(id)
    setNovoAssunto(assunto)
  }


  async function excluirSolicitacao(id) {
    confirmAlert({
      title:'Deletar solicitação',
      message:`Tem certeza?`,
      buttons:[
          {
              label:'Sim',
              onClick: async () => {
              const resposta = await deletarSolicitacao(id);
              console.log(resposta)
              
              carregarTodasSolicitacoes();
                toast.success('Solicitação deletada com sucesso')           
              }
              
          },
          {
              label:'Não'
          }
      ]
  })
  }

  

  useEffect(() => {
    carregarUser();
    carregarTodasSolicitacoes();
  }, []);


  Modal.setAppElement('#root');

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const customStyles = {
        content: {
            display:'flex',
            justifyContent:'center',
            alignItens:'center',
            border:'none',
            margin:'none',
            backgroundColor:'#00000000',
            
        },
        overlay: {
            backgroundColor: '#000000ce'
        }
    };

  return (
    <main className="usuario-perfil">
      <Perfil inicial={usuario.nome} usuario={usuario.nome} perfil="usuario" />
      <div className="infos">
        <ToastContainer />
        <div className="card-infos-gerais">
          <div className="card-titulo">
            <h2>Informações Gerais</h2>
            <img src="/assets/images/Edit.png" onClick={openModal} />
            <Modal 
             
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 style={customStyles}>
                  <img src="/assets/images/excluir.png" width={30} height={30} onClick={closeModal} />
                 <AlterarInfos perfil='usuario'  />                        
               
            </Modal>
          </div>
          <div>
            <h3>Nome</h3>
            <p>{usuario.nome}</p>
            <h3>E-mail</h3>
            <p>{usuario.email}</p>
            <h3>Telefone</h3>
            <p>{usuario.telefone}</p>
            <h3>CPF</h3>
            <p>{usuario.cpf}</p>
            <h3>Data de nascimento</h3>
            <p>{String(usuario.DataDeNascimento).substr(0, 10)}</p>
          </div>
        </div>
      </div>

      <div className="faixa-solicitar">
        <h2>Suas Solicitações</h2>
        <div className="box-solicitacao">
          <div className="top-solicitacao">
            <p>Categorias:</p> <span>+</span>
          </div>
          <div className="text-solicitacao">
            <textarea
              onChange={(e) => setAssunto(e.target.value)}
              type="text"
              placeholder="Digite sua solicitação"
            ></textarea>
          </div>
        </div>
        <button onClick={cadastrarSolicitacao}>Enviar solicitação</button>
      </div>

      <div className='faixa-solicitacoes'>
              {solicitacao.map (item =>  
                <div className='box-solicitacao'>
                    <div className='top-solicitacao-2'>
                        <p>{item.horario} - {item.situacao === 0 ? "Solicitação em aberto" : "Solicitação aceita"} </p>
                        <img onClick={() => mudarSolicitacao(item.solicitacao)} src='/assets/images/black-edit.png'/>
                        <img onClick={() => excluirSolicitacao(item.id)} src='/assets/images/trash.png'/>
                    </div>
                    <div className='text-solicitacao'>
                        <hr color="#DEDEDE"/>
                        <p>{item.texto}</p>
                        <hr color="#DEDEDE" />

                    </div>
                    <div className='categorias-solicitacao'>
                        <div><p>Categorias: Burnout, estresse, neurose</p></div>
                        
                    </div>
                </div>
                )}
            </div>


      
    </main>
  );
}
