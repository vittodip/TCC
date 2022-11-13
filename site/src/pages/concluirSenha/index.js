import { useState } from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { mudarSenha } from '../../api/usuarioApi';
import { useNavigate } from 'react-router-dom'
import './index.scss';

export default function ConcluirSenha(){
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    async function trocarSenha(){
        try {
            const r = await mudarSenha(senha, email);
            toast.success('Senha alterada com sucesso!')
            navigate('/cadastro/home')
        } catch (err) {
            toast.error('Verifique se o e-mail está correto.')
        }
    }

    return(
        <main className='CSenha'>
            <ToastContainer/>
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