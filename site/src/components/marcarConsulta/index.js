import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'
import { marcarConsulta } from '../../api/consultaApi'
import './index.scss'


export default function MarcarPop(props) {
    const [consulta, setConsulta] = useState([])
    
    async function marcarConsult(){
        try {
            const idPsic = Storage('voluntario-logado').id;
            const marcar = await marcarConsulta(consulta, idPsic);
            setConsulta(marcar)
            
            toast.dark('Consulta Marcada')
        } catch (err) {
            toast.dark('Deu Erro')
        }

    } 

    return(
        <main className='pop-up-marcar'>
            <Toaster/>
            <div className='titulo-pop'>
                <img src='/assets/images/exit-purple.png' onClick={props.click}/>
                <h1>Marcar Sessão</h1>
            </div>
            <div className='inputs'>
                <div className='linha1-input'>
                    <label>
                        <p>Data</p>
                        <input placeholder='00/00/0000'/>
                    </label>
                    <label>
                        <p>Hora</p>
                        <input placeholder='00:00'/>
                    </label>
                    
                </div>
                <div className='linha2-input'>
                <label>
                        <p>Link Google Meet</p>
                        <input placeholder='https://meet.google.com/aaa-aaaa-aaa'/>
                    </label>
                </div>
                <button onClick={marcarConsult}>Salvar</button>
            </div>

        </main>
    )
}