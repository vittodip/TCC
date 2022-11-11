import { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import { mudarSenhaUser } from '../../api/usuarioApi';
import './index.scss';

export default function ConcluirSenha(){
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState();

    async function trocarSenha(){
        try {
            
            const r = await mudarSenhaUser(email, senha, id);
            setEmail()
            toast('deu certo')
            
            
        } catch (err) {
            toast('deu ruim')
        }
    }

    return(
        <main className='CSenha'>
            <div className='headerSenha'>
                <img src='/assets/images/logonat.png' />
                <div className='topicos'>
                    <Link to='/'>Pagina Inicial</Link>
                    <Link to='/home/login'>Voltar</Link>
                </div>
            </div>

                <img src='/assets/images/mocoAtendimento.png' className='img'/>
                <section className='pop-up'>
            <div className='painel'>
                <h1>Digite sua nova senha</h1>
                <p>Sua senha deve ter pelo menos 8 caracteres e deve conter letras e números. </p>

                <div className='infoEmail'>
                    <label>Confirme seu e-mail</label>
                    <input type='text' placeholder='email@email.com' value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Nova senha</label>
                    <input type='password' placeholder='***********' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>
                
                <button onClick={trocarSenha}>Concluir</button>
            </div>
            </section>
                <img src='/assets/images/mocaFormas.png' className='img2' />



        </main>
    )


}