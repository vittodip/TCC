
import './index.scss'


export default function HomeLogin(){
    return(
        <main className='home-login'>
            <section className='secao1'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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

                <button>
                    <img src="" alt="" />
                </button>
                <div className='s2-alinhamento-opcoes'>
                    <p>Não tem uma conta? Cadastre-se <span>aqui</span></p>
                    <a href="">entrar como voluntário</a>
                </div>
            </section>
        </main>
    )
}