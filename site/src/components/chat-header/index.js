import './index.scss'

import MarcarPop from '../../components/marcarConsulta'
import Modal from 'react-modal';
import { useEffect, useState } from 'react'
import storage from 'local-storage'


export default function ChatHeader(props){
    
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <div className="header-chat">
          <header className="section-header">
            
            <div className='alinhamento-content'>
                <img src="/assets/images/perfil-anonimo-chat.svg" alt="" />
                <p>{props.nome}</p>
            </div>
            <div className='alinhamento-content2'>
                {storage('voluntario-logado') &&
                <img src="/assets/images/meet-icon.svg" alt="" onClick={openModal} />
              }
                <img src="/assets/images/tres-pontos.svg" alt=""  />
                <Modal 
              
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}>
                    
                  <MarcarPop click={closeModal} />                        
                
              </Modal>
            </div>
            
          </header>
        </div>
    
      )
}