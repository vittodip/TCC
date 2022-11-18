import './index.scss'

import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { loginUsuario } from '../../api/usuarioApi';

export default function Perfil(props) {

    const navigate = useNavigate();

    function sairClickUsuario () {
        Storage.remove('usuario-logado');
        navigate('/login/paciente')
    }  
    function sairClickVoluntario () {
        Storage.remove('voluntario-logado');
        navigate('/login/voluntario')
    }

    function paginaSolicitacoes () {
        navigate('/solicitacoes')
    }

    return (

        <main className='perfil-usuario-main'>
            <div className='pic-background-user'>
           
                <img src='/assets/images/logonat.png'/>
                
                <div className='buttons'>
                    {props.perfil === 'usuario' && 
                        <button onClick={() => [navigate('/denunciar')]}>Denunciar</button>
                    }
                    {props.perfil === 'usuario' && 
                        <button onClick={() => [navigate('/chat')]}>Conversas</button>
                    }
                    
                    {props.perfil === 'voluntario' &&
                        <button onClick={paginaSolicitacoes}>Solicitações</button>
                    }
                     {props.perfil === 'usuario' &&
                       <button onClick={sairClickUsuario} > <img src='/assets/images/Logout (1).png'/> Sair</button>
                    }
                    {props.perfil === 'voluntario' &&
                       <button onClick={sairClickVoluntario} > <img src='/assets/images/Logout (1).png'/> Sair</button>
                    }
                    
                </div>
            
                <div className='pic-user'> 
                    <span>{String(props.inicial).substr(0,1)}</span> 
                </div>
                
            </div>
            <h1 className='nome-usuario'>Seja bem-vindo, {props.usuario}! <img src='/assets/images/Heart.png'/></h1>
        </main>
    )
}