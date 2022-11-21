import './index.scss'


import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'

import { marcarConsulta } from '../../api/consultaApi';

export default function ChatHeader(props) {
  const [consulta, setConsulta] = useState(false)
  const [consultaData, setConsultaData] = useState()
  const [consultaHora, setConsultaHora] = useState()
  const [consultaLink, setConsultaLink] = useState()

  const navigate = useNavigate();

  function navegarClick() {
    navigate('/denunciar')
  }

  async function AgendarConsulta() {
    try {
      const idPsic = storage('voluntario-logado').id;
      const resp = await marcarConsulta(consultaData, consultaHora, consultaLink, idPsic, props.idUsu);
      setConsulta(false)
    } catch (err) {
      toast.error(err.message)
    }
  }



  return (
    <div className="header-chat">
      {consulta === true &&
        <div className='pop-up-marcar'>
          <div className='titulo-pop'>
            <h1>Marcar Sessão</h1>
          </div>
          <div className='inputs'>
            <div className='linha1-input'>
              <label>
                <p>Data</p>
                <input onChange={e => setConsultaData(e.target.value)} type='date' placeholder='00/00/0000' />
              </label>
              <label>
                <p>Hora</p>
                <input onChange={e => setConsultaHora(e.target.value)} type='time' placeholder='00:00' />
              </label>

            </div>
            <div className='linha2-input'>
              <label>
                <p>Link Google Meet</p>
                <input onChange={e => setConsultaLink(e.target.value)} placeholder='https://meet.google.com/aaa-aaaa-aaa' />
              </label>
            </div>
            <div className='button-alinhamento'>
              <button onClick={e => setConsulta(false)}>Cancelar</button>
              <button onClick={AgendarConsulta}>Salvar</button>
            </div>

          </div>
        </div>
      }
      <header className="section-header">

        <div className='alinhamento-content'>
          <img src="/assets/images/perfil-anonimo-chat.svg" alt="" />
          <p>{props.nome}</p>
        </div>

        <p>{props.email}</p>

        <div className='alinhamento-content2'>
          {storage('voluntario-logado') &&
            <img src="/assets/images/meet-icon.svg" alt="" onClick={e => setConsulta(true)} />
          }
          <img src="/assets/images/spam-denuncia-icon.svg" alt="" onClick={navegarClick} />

        </div>

      </header>
    </div>

  )
}