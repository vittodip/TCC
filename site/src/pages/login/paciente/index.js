import './index.scss'

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../../../api/usuarioApi';

import Storage from 'local-storage'



export default function LoginPaciente(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    async function loginUser () {
        const r = await loginUsuario(email, senha);
    }

    useEffect(() => {
        if(Storage('usuario-logado')) {
          navigate('/perfil/usuario/:usuarioParam');
        }
      }, [])


      /*async function entrarClick() {
    
        ref.current.continuousStart();
        setCarregando(true);
        
        try {
          const r = await login (email, senha);
          Storage('usuario-logado', r);
    
          setTimeout(() => {
            navigate('/marcadas');
          }, 3000)
    
        }
        catch (err) {
          ref.current.complete();
          setCarregando(false);
          if (err.response.status === 401) {
            setErro(err.response.data.erro);
          }
        }
    
      }*/


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

                <h1>Entrar - Paciente</h1>

                <div className='s2-label-inputs'>
                    <label>E-mail</label>
                    <input type="text" placeholder='email@email.com'  value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='s2-label-inputs'>
                    <label>Senha</label>
                    <input type="text" placeholder='*********' value={senha} onChange={e => setSenha(e.target.value)} />
                    <a href="">Esqueci minha senha</a>
                </div> 

            <button className="botao-entrar" onClick={loginUser}>
                    <img src="/assets/images/entrar.png" alt="" />
                </button>
                <div className='s2-alinhamento-opcoes'>
                    <p>Não tem uma conta? Cadastre-se <Link to='/home/login' className='a'>aqui</Link></p>
                    <Link to='/login/voluntario'>Entrar como voluntário</Link>
                </div>
            </section>
        </main>
    )
}
