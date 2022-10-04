import Perfil from "../../../components/perfil";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Storage  from 'local-storage';

import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { carregarUsuario } from "../../../api/usuarioApi.js";
import { listarSolicitacao } from "../../../api/solicitacaoApi.js";
import { inserirSolicitacao } from "../../../api/solicitacaoApi.js";
import Modal from 'react-modal'
import AlterarInfos from "../../../components/editar-infos";

export default function PerfilUsuario() {
  const [usuario, setUsuario] = useState([]);

  const [solicitacao, setSolicitacao] = useState([]);
  

  const { usuarioParam } = useParams();

  const [assunto, setAssunto] = useState("");
  const [situacaoSol, setSituacaoSol] = useState(false);
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
      console.log("cavalo")
      const resp = await inserirSolicitacao(idUser , assunto);
      toast("Solicitação feita com sucesso");
      
    } catch (err) {
      toast(err.response.data.erro);
    }
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
                  
                 <AlterarInfos onClick={closeModal} perfil='usuario'  />                        
               
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
                        <img src='/assets/images/black-edit.png'/>
                        <img src='/assets/images/trash.png'/>
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
