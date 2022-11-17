import { useEffect, useState } from "react";
import Storage from 'local-storage';
import "./index.scss";
import { toast, Toaster } from 'react-hot-toast'
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'
import { enviarEmail } from '../../api/usuarioApi';
import './index.scss';

export default function EsqueciSenha() {
    const [email, setEmail] = useState('');

    async function emailUser(){
        try {
            
            const emailUsuario = await enviarEmail(email);
            setEmail(emailUsuario)
            toast('E-mail enviado.')
        } catch (err) {
            toast('Erro')
        }
    }   






    return (
        <main className='ESenha'>
            <Toaster />
            <div>
                <div className='headerSenha'>
                    <img src='/assets/images/logonat.png' />
                    <div className="topicos">
                        <Link to='/'>Pagina Inicial</Link>
                        <Link to='/home/login'>Voltar</Link>
                    </div>
                </div>


                <img src='/assets/images/mocoAtendimento.png' className='img' />
                <section className='pop-up'>
                <div className='painel'>
                    <h1>Esqueci minha senha</h1>
                    <p>Para redefinir sua senha, informe o e-mail cadastrado em sua conta e lhe enviaremos um e-mail com mais informações </p>

                    <div className='infoEmail'>
                        <label>E-mail</label>
                        <input type='text' placeholder='email@email.com' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button onClick={emailUser}>Enviar</button>
                </div>
                </section>
                <img src='/assets/images/mocaFormas.png' className='img2' />

            </div>

        </main>
    )


}