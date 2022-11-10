import { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { mudarSenhaUser } from '../../api/usuarioApi';
import './index.scss';

export default function ConcluirSenha(){
    const [senha, setSenha] = useState('');

    async function trocarSenha(){
        try {
            const r = await mudarSenhaUser();
    
            setSenha(r)
            toast('deu certo')
            
        } catch (err) {
            toast('deu ruim')
        }
    }

    return(
        <main className='CSenha'>
            <div className='header'>
                <img src='/assets/images/logonat.png' />
                <div>
                    <Link to='/'>Pagina Inicial</Link>
                    <Link to='/home/login'>Voltar</Link>
                </div>
            </div>

                <img src='/assets/images/mocoAtendimento.png' className='img'/>
            <div className='painel'>
                <h1>Digite sua nova senha</h1>
                <p>Sua senha deve ter pelo menos 8 caracteres e deve conter letras e números. </p>

                <div className='infoEmail'>
                    <label>Nova senha</label>
                    <input type='text' placeholder='***********' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>
                <button onClick={trocarSenha}>Concluir</button>
            </div>
                <img src='/assets/images/mocaFormas.png' className='img2' />



        </main>
    )


}