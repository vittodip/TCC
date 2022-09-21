
import './index.scss'

import { Link } from 'react-router-dom';

export default function LoginVoluntario(){
    return(
        <main className='home-login'>
            <section className='secao1'>
                <img className="mocas-tocaq" width={350} src="/assets/images/MOCAS TOCAQ 1.png" alt="" />
                <img className='moca-nuvem'src="/assets/images/moca nuvem.png" width={315} alt="" />
                <img className='moco-nuvem'src="/assets/images/moco deitado.png" width={350}alt="" />
            </section>
            <section className='secao2'>
                <img className='s2-logo' src="/assets/images/logo-login.png" alt="" />
                <p className='s2-texto-logo'>Acesse de onde estiver!</p>

                <h1>Entrar - Psicólogo</h1>

                <div className='s2-label-inputs'>
                    <label>E-mail</label>
                    <input type="text" placeholder='email@email.com' />
                </div>
                <div className='s2-label-inputs'>
                    <label>Senha</label>
                    <input type="text" placeholder='*********' />
                    <a href="">Esqueci minha senha</a>
                </div>

            <button className="botao-entrar">
                    <img src="/assets/images/entrar.png" alt="" />
                </button>
                <div className='s2-alinhamento-opcoes'>
                    <p>Não tem uma conta? Cadastre-se <Link to='/home/login' className='a'>aqui</Link></p>
                    <Link to='/login/paciente'>Entrar como paciente</Link>
                </div>
            </section>
        </main>
    )
}