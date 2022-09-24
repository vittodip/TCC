import './index.scss'

import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { loginUsuario } from '../../api/usuarioApi';

export default function Perfil(props) {

    const navigate = useNavigate();

    function sairClick () {
        Storage.remove('usuario-logado');
        navigate('/home/login')
    }  

    return (

        <main className='perfil-usuario-main'>
            <div className='pic-background-user'>
           
                <img src='/assets/images/logonat.png'/>
                
                <div className='buttons'>
                    {props.perfil === 'usuario' && 
                        <button>Denunciar</button>
                    }
                    <button>Conversas</button>
                    <button onClick={sairClick} > <img src='/assets/images/Logout (1).png'/> Sair</button>
                </div>
            
                <div className='pic-user'> 
                    <span>{props.inicial}</span> 
                </div>
                
            </div>
            <h1 className='nome-usuario'>Sejam bem-vindo, {props.usuario}! <img src='/assets/images/Heart.png'/></h1>
        </main>
    )
}